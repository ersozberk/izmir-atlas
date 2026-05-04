import { createClient } from '@supabase/supabase-js';

// GitHub Actions ortam değişkenlerinden (Secrets) API anahtarlarını alıyoruz
const SUPABASE_URL = process.env.SUPABASE_URL;
// DİKKAT: Burada Anon Key değil, veritabanına tam yetkili yazma izni olan SERVICE_ROLE_KEY kullanıyoruz.
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; 

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
const IZMIR_API_URL = "https://openapi.izmir.bel.tr/api/ibb/nobetcieczaneler";

async function syncEczaneler() {
  console.log("🚀 Nöbetçi eczane senkronizasyonu başlıyor...");

  try {
    // 1. İzmir Belediyesi API'sinden güncel veriyi çek
    const response = await fetch(IZMIR_API_URL);
    if (!response.ok) throw new Error(`API Hatası: ${response.status}`);
    
    const veriler = await response.json();
    console.log(`✅ Belediyeden ${veriler.length} adet eczane verisi çekildi.`);

    // 2. Verileri Supabase tablomuza uygun formata dönüştür
    const temizVeriler = veriler.map((eczane) => {
      const lat = parseFloat(eczane.LokasyonY);
      const lng = parseFloat(eczane.LokasyonX);
      
      return {
        tarih: eczane.Tarih,
        adi: eczane.Adi,
        telefon: eczane.Telefon,
        adres: eczane.Adres,
        ilce: eczane.Bolge,
        lat: lat,
        lng: lng,
        // PostGIS 'lokasyon' sütunu için WKT (Well-Known Text) formatında nokta verisi
        lokasyon: `SRID=4326;POINT(${lng} ${lat})` 
      };
    });

    // 3. Tablodaki dünkü/eski eczaneleri sil (Clean Slate)
    // Gerçek bir senaryoda tarih bazlı sileriz, ama bu tabloda sadece "o günün" aktif nöbetçilerini tutacağız
    const { error: deleteError } = await supabase
      .from('nobetci_eczaneler')
      .delete()
      .neq('id', 0); // Tüm tabloyu güvenli şekilde boşaltmanın bir hilesi

    if (deleteError) throw deleteError;
    console.log("🧹 Eski nöbetçi kayıtları temizlendi.");

    // 4. Yeni verileri Bulk Insert (Toplu Ekleme) ile tek seferde veritabanına bas
    const { error: insertError } = await supabase
      .from('nobetci_eczaneler')
      .insert(temizVeriler);

    if (insertError) throw insertError;
    console.log(`🎉 Başarılı! ${temizVeriler.length} yeni nöbetçi eczane Supabase'e işlendi.`);

  } catch (error) {
    console.error("❌ HATA OLUŞTU:", error.message);
    process.exit(1); // GitHub Actions'ın fail vermesi için süreçten hata koduyla çık
  }
}

syncEczaneler();