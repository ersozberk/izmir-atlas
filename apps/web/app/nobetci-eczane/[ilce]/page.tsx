import { supabase } from "@/lib/supabase";
import DinamikHarita from "@/components/DinamikHarita";
import { Metadata } from "next";
import Link from "next/link";

// Next.js 16 Standartları: Params artık bir Promise olarak tanımlanmalı
type Props = {
  params: Promise<{ ilce: string }>;
};

// 1. DİNAMİK SEO META ETİKETLERİ
export async function generateMetadata(props: Props): Promise<Metadata> {
  // Promise olan params'ı await ile çözüyoruz
  const params = await props.params;
  const ilceAdi = decodeURIComponent(params.ilce).toLocaleUpperCase("tr-TR");
  
  return {
    title: `${ilceAdi} Nöbetçi Eczaneler | Anlık Harita ve Yol Tarifi`,
    description: `İzmir ${ilceAdi} bölgesindeki güncel nöbetçi eczanelerin adresleri, telefon numaraları ve en yakın eczaneye yol tarifi.`,
  };
}

// 2. SUNUCU TARAFLI SAYFA OLUŞTURUCU
export default async function IlceEczaneSayfasi(props: Props) {
  // Aynı şekilde burada da await ile ilçeyi çıkarıyoruz
  const params = await props.params;
  const arananIlce = decodeURIComponent(params.ilce).toLocaleUpperCase("tr-TR");

  // Sadece bu ilçeye ait olan eczaneleri Supabase'den çek
  const { data: eczaneler, error } = await supabase
    .from("nobetci_eczaneler")
    .select("*")
    .ilike("ilce", `%${arananIlce}%`);

  if (error) {
    return <div className="text-center mt-10 text-red-500">Veri çekilirken bir hata oluştu.</div>;
  }

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      
      {/* Üst Yönlendirme (Breadcrumb) ve Başlık */}
      <div className="w-full text-left mb-4">
        <Link href="/" className="text-teal-400 hover:text-teal-300 text-sm font-medium transition flex items-center gap-1">
          ← Tüm İzmir Haritasına Dön
        </Link>
      </div>

      <div className="text-center my-4 space-y-2">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          {arananIlce} Nöbetçi Eczaneleri
        </h1>
        <p className="text-slate-400 font-medium">
          Şu an {arananIlce} bölgesinde toplam <span className="text-teal-400 font-bold">{eczaneler?.length || 0}</span> adet nöbetçi eczane bulunuyor.
        </p>
      </div>

      {/* Harita */}
      <div className="w-full relative z-10">
        <DinamikHarita eczaneler={eczaneler || []} />
      </div>

      {/* Yapay Zeka Destekli SEO Metni */}
      <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-300 text-sm leading-relaxed w-full max-w-4xl">
        <h2 className="text-lg font-bold text-white mb-2">{arananIlce} Nöbetçi Eczane Sorgulama</h2>
        <p>
          Bu sayfadaki veriler İzmir Büyükşehir Belediyesi Açık Veri Portalı üzerinden her gün otomatik olarak güncellenmektedir. 
          Yukarıdaki haritayı kullanarak size en yakın {arananIlce} nöbetçi eczanesini bulabilir, "Yol Tarifi Al" butonuna tıklayarak 
          doğrudan Google Haritalar üzerinden navigasyon başlatabilirsiniz. Gitmeden önce ilgili eczaneyi telefonla arayarak 
          ilaç stok durumunu teyit etmeniz önerilir.
        </p>
      </div>
    </div>
  );
}