import Link from "next/link";

export const Footer = () => {
  return (
    // Apple'ın standart footer arka plan rengi: #f5f5f7
    <footer className="w-full bg-[#f5f5f7] pt-4 pb-8 flex flex-col font-sans overflow-hidden">
      {/* Apple footer'ları genellikle 980px ile sınırlandırılır */}
      <div className="max-w-[980px] mx-auto w-full px-4 text-[11px] text-[#86868b] leading-[1.33337]">
        
        {/* ========================================================
            1. YASAL UYARILAR VE NOTLAR (Küçük gri yazılar)
        ======================================================== */}
        <div className="pb-4 border-b border-[#d2d2d7] space-y-2.5">
          <p>
            1. Bu platformda yer alan veriler İzmir Büyükşehir Belediyesi Açık Veri Portalı (Açık Veri İzmir) üzerinden anlık olarak sağlanmaktadır. Verilerin doğruluğu ve güncelliği kaynak sisteme bağlıdır ve gecikmeler yaşanabilir. Seyahat planlamalarınızda veya acil durumlarda resmi kurumların asıl kaynaklarını teyit etmeniz önerilir.
          </p>
          <p>
            Apple, Apple Logosu, Mac, iPad, iPhone, Apple Watch ve App Store, Apple Inc. şirketinin ABD ve diğer ülkelerde tescilli ticari markalarıdır. Diğer tüm ürün ve şirket isimleri kendi sahiplerinin ticari markaları olabilir.
          </p>
          <p>
            İzmir Atlas API hizmetlerini ve gerçek zamanlı Webhooks aboneliklerini kullanmak için geliştirici hesabı oluşturmanız gerekmektedir. Bazı modüller, uygulamalar ve servisler tüm bölgelerde veya tüm dillerde kullanılamayabilir.
          </p>
        </div>

        {/* ========================================================
            2. MEGA LİNK İSKELETİ (5 Sütunlu Grid)
        ======================================================== */}
        <div className="py-5 grid grid-cols-1 md:grid-cols-5 gap-y-6 md:gap-x-4">
          
          {/* SÜTUN 1 */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2.5 text-[12px]">Keşfet ve Öğren</h3>
              <ul className="space-y-2">
                <li><Link href="/nobetci-eczane" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Nöbetçi Eczaneler</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Su ve Barajlar</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Akıllı Ulaşım</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">WizmirNET</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Vapur Saatleri</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Kültür ve Sanat</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Hal Fiyatları</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Afet Toplanma</Link></li>
              </ul>
            </div>
          </div>

          {/* SÜTUN 2 */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2.5 text-[12px]">Hesap</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Atlas Hesabını Yönet</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Geliştirici Hesabı</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">iCloud.com ile Giriş</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2.5 text-[12px]">Geliştirici</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">API Dokümantasyonu</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">WebSockets</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Açık Kaynak</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Sistem Durumu</Link></li>
              </ul>
            </div>
          </div>

          {/* SÜTUN 3 */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2.5 text-[12px]">Kurumlar</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">İzmir Büyükşehir Belediyesi</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">ESHOT Genel Müdürlüğü</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">İZSU Genel Müdürlüğü</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">İZDENİZ</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">İzmir İnovasyon Merkezi</Link></li>
              </ul>
            </div>
          </div>

          {/* SÜTUN 4 */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2.5 text-[12px]">Kurumsal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">İşletmeler için Atlas</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Veri Entegrasyonu</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2.5 text-[12px]">Eğitim</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Eğitimde Açık Veri</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Üniversiteler için</Link></li>
              </ul>
            </div>
          </div>

          {/* SÜTUN 5 */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2.5 text-[12px]">Atlas Değerleri</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Erişilebilirlik</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Çevre</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Gizlilik</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Açık Veri Manifestosu</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2.5 text-[12px]">Hakkımızda</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">İletişim</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Kariyer Fırsatları</Link></li>
                <li><Link href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">Etkinlikler</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* ========================================================
            3. İLETİŞİM / DESTEK SATIRI
        ======================================================== */}
        <div className="pb-4 border-b border-[#d2d2d7] text-[#424245]">
          Daha fazla bilgi için: <Link href="#" className="text-[#0066cc] hover:underline">Destek Merkezi</Link>ni ziyaret edin. Veya <Link href="#" className="text-[#0066cc] hover:underline">bize ulaşın</Link>.
        </div>

        {/* ========================================================
            4. ALT SATIR (Telif, Yasal Linkler ve Bölge)
        ======================================================== */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <div className="text-[#424245]">
            Copyright © 2026 İzmir Atlas. Tüm hakları saklıdır.
          </div>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#424245]">
            <Link href="#" className="hover:text-[#1d1d1f] hover:underline">Gizlilik Politikası</Link>
            <span className="w-[1px] h-[14px] bg-[#d2d2d7]"></span>
            <Link href="#" className="hover:text-[#1d1d1f] hover:underline">Kullanım Şartları</Link>
            <span className="w-[1px] h-[14px] bg-[#d2d2d7]"></span>
            <Link href="#" className="hover:text-[#1d1d1f] hover:underline">Lisanslar</Link>
            <span className="w-[1px] h-[14px] bg-[#d2d2d7]"></span>
            <Link href="#" className="hover:text-[#1d1d1f] hover:underline">Site Haritası</Link>
          </div>

          <div className="text-[#424245] hover:text-[#1d1d1f] cursor-pointer">
            Türkiye
          </div>
        </div>

      </div>
    </footer>
  );
};