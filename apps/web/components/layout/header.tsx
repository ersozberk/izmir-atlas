"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, MapPin, Menu } from "lucide-react";

// ========================================================
// APPLE MEGA MENU VERİ MODELİ
// ========================================================
const navigationData = [
  {
    id: "eczaneler",
    label: "Eczaneler",
    groups: [
      {
        title: "Eczane Araçlarını Keşfet",
        type: "large",
        items: [
          { label: "Nöbetçi Eczaneler", href: "/nobetci-eczane" },
          { label: "Yakınımdaki Eczaneler", href: "#" },
          { label: "Nöbet Çizelgesi", href: "#" },
        ]
      },
      {
        title: "Destek & Kurumlar",
        type: "small",
        items: [
          { label: "İzmir Eczacı Odası", href: "#" },
          { label: "Sağlık Bakanlığı İletişim", href: "#" },
        ]
      }
    ]
  },
  {
    id: "ulasim",
    label: "Ulaşım",
    groups: [
      {
        title: "Ulaşım Ağını Keşfet",
        type: "large",
        items: [
          { label: "Otobüs Takibi", href: "#" },
          { label: "Vapur Saatleri", href: "#" },
          { label: "İZBAN Seferleri", href: "#" },
          { label: "Metro İstasyonları", href: "#" },
          { label: "Otopark Dolulukları", href: "#" },
        ]
      },
      {
        title: "İzmirim Kart",
        type: "small",
        items: [
          { label: "Bakiye Sorgulama", href: "#" },
          { label: "Online TL Yükleme", href: "#" },
          { label: "Kayıp Eşya Bürosu", href: "#" },
        ]
      }
    ]
  },
  {
    id: "barajlar",
    label: "Su & Barajlar",
    groups: [
      {
        title: "Su Kaynaklarını İncele",
        type: "large",
        items: [
          { label: "Baraj Doluluk Oranları", href: "#" },
          { label: "Su Kesintileri", href: "#" },
          { label: "Su Kalite Raporları", href: "#" },
        ]
      },
      {
        title: "İZSU Destek",
        type: "small",
        items: [
          { label: "Fatura Sorgulama", href: "#" },
          { label: "Arıza Bildirimi", href: "#" },
        ]
      }
    ]
  },
  {
    id: "gelistirici",
    label: "Geliştirici",
    groups: [
      {
        title: "Atlas API",
        type: "large",
        items: [
          { label: "API Dokümantasyonu", href: "#" },
          { label: "Gerçek Zamanlı Veri", href: "#" },
          { label: "Açık Kaynak Kodlar", href: "#" },
        ]
      },
      {
        title: "Sistem Durumu",
        type: "small",
        items: [
          { label: "API Key Al", href: "#" },
          { label: "Sunucu Durumu (Status)", href: "#" },
        ]
      }
    ]
  }
];

export const Header = () => {
  // Hangi menünün açık olduğunu tutan State
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Menüyü kapatma işlemi (Fare Header'dan çıkınca)
  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const activeData = navigationData.find((nav) => nav.id === activeMenu);

  return (
    <>
      {/* ========================================================
          1. HEADER (ÜST BAR) + MEGA MENU KAPSAYICISI
          Fare bu alanın dışına çıkmadıkça menü kapanmaz.
      ======================================================== */}
      <header 
        className="fixed top-0 left-0 w-full z-[100]"
        onMouseLeave={handleMouseLeave}
      >
        {/* Navigasyon Barı (Sabit 44px Yükseklik) */}
        <div className={`relative z-20 w-full h-[44px] transition-colors duration-300 ${activeMenu ? 'bg-white' : 'bg-white/80 backdrop-blur-md border-b border-[#d2d2d7]/50'}`}>
          <div className="w-full max-w-[1024px] mx-auto h-full flex items-center justify-between px-4 lg:px-0">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 text-[#1d1d1f] hover:opacity-70 transition-opacity">
              <MapPin size={16} strokeWidth={2} />
              <span className="text-[14px] font-semibold tracking-tight">İzmir Atlas</span>
            </Link>

            {/* Küresel Menü Linkleri (Fareyle üstüne gelince açılır) */}
            <nav className="hidden md:flex items-center justify-center gap-8 flex-1 px-8 h-full">
              {navigationData.map((item) => (
                <div 
                  key={item.id}
                  className="h-full flex items-center cursor-pointer"
                  onMouseEnter={() => setActiveMenu(item.id)}
                >
                  <span className={`text-[12px] font-normal tracking-wide transition-colors ${activeMenu === item.id ? 'text-[#1d1d1f]' : 'text-[#1d1d1f]/80 hover:text-[#1d1d1f]'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
              {/* Dropdown'ı olmayan basit linkler */}
              <div className="h-full flex items-center cursor-pointer" onMouseEnter={() => setActiveMenu(null)}>
                <Link href="#" className="text-[12px] font-normal tracking-wide text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">WizmirNET</Link>
              </div>
            </nav>

            {/* Sağ Aksiyonlar */}
            <div className="flex items-center gap-5 text-[#1d1d1f]/80" onMouseEnter={() => setActiveMenu(null)}>
              <button className="hover:text-[#1d1d1f] transition-colors cursor-pointer" aria-label="Ara">
                <Search size={15} strokeWidth={2} />
              </button>
              <button className="md:hidden hover:text-[#1d1d1f] transition-colors" aria-label="Menü">
                <Menu size={18} strokeWidth={2} />
              </button>
            </div>

          </div>
        </div>

        {/* ========================================================
            2. MEGA MENU AÇILIR PANELİ (Aşağı doğru pürüzsüz iner)
        ======================================================== */}
        <div 
          className={`absolute top-[44px] left-0 w-full bg-white overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${activeMenu ? 'max-h-[500px] border-b border-[#d2d2d7]/50' : 'max-h-0'}`}
        >
          {/* İçerik Konteyneri (Animasyon sırasında zıplamayı önlemek için py padding'i iç div'e verdik) */}
          <div className={`w-full max-w-[1024px] mx-auto px-4 pt-10 pb-16 transition-opacity duration-300 delay-100 ${activeMenu ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex gap-20">
              
              {/* Seçili menünün gruplarını (Büyük ve Küçük fontlu sütunlar) map ile çiziyoruz */}
              {activeData?.groups.map((group, index) => (
                <div key={index} className="flex flex-col">
                  {/* Başlık: Gönderdiğin resimdeki o küçücük soluk gri başlık (ör: Explore Entertainment) */}
                  <h4 className="text-[11px] text-[#86868b] tracking-wider mb-4">{group.title}</h4>
                  
                  <div className="flex flex-col gap-3">
                    {group.items.map((link, linkIdx) => (
                      <Link 
                        key={linkIdx} 
                        href={link.href}
                        // Eğer type "large" ise Apple TV yazısı gibi devasa ve kalın olur, "small" ise Support yazısı gibi ince kalır.
                        className={`transition-colors text-[#1d1d1f] hover:text-[#0071e3] ${
                          group.type === 'large' 
                            ? 'text-[24px] font-semibold tracking-tight' 
                            : 'text-[13px] font-medium'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </header>

      {/* ========================================================
          3. ARKA PLAN BULANIKLAŞTIRMA (BACKDROP BLUR)
          Menü açıldığında tüm siteyi karartıp bulanıklaştırır.
      ======================================================== */}
      <div 
        // pointer-events-none ile menü kapalıyken sitedeki tıklamaları engellemez.
        className={`fixed inset-0 top-[44px] bg-black/20 backdrop-blur-sm z-[90] transition-opacity duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          activeMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        // Kullanıcı boş bulanık alana tıklarsa da menüyü kapatıyoruz
        onMouseEnter={handleMouseLeave}
      />
    </>
  );
};