"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronRight, Activity, Droplet, Bus, Wifi, Ticket, ShoppingBasket, Map, Database, Play, Pause, Code2, Cpu, Globe, Zap } from "lucide-react";

// ========================================================
// TYPESCRIPT VERİ MODELLERİ
// ========================================================
interface SlideData {
  hero: {
    title: string;
    desc: string;
    bg: string;
    text: string;
    sub: string;
    icon: React.ReactNode;
    btn: string;
    border?: boolean;
  };
  mini: {
    title: string;
    link: string;
  };
}

export default function Home() {
  return (
    <div className="w-full bg-white flex flex-col font-sans selection:bg-[#0071e3] selection:text-white overflow-x-hidden">
      
      {/* ========================================================
          1. BÖLÜM: 3 ADET DEV HERO
      ======================================================== */}
      <div className="flex flex-col gap-3">
        <section className="w-full h-[85vh] bg-white flex flex-col items-center pt-24 relative overflow-hidden shrink-0">
          <h2 className="text-[52px] md:text-[72px] font-semibold tracking-tight text-[#1d1d1f] leading-none text-center">İzmir Atlas</h2>
          <h3 className="text-[26px] md:text-[32px] font-normal tracking-tight text-[#1d1d1f] mt-2 text-center">Şehrin dijital ikiziyle tanışın.</h3>
          
          <div className="flex items-center gap-4 mt-8 relative z-10">
            <Link href="#discover" className="bg-[#0071e3] text-white border border-[#0071e3] text-[17px] px-6 py-2.5 rounded-full transition-colors hover:bg-transparent hover:text-[#0071e3]">
              Daha fazla bilgi
            </Link>
            <Link href="/nobetci-eczane" className="bg-transparent text-[#0071e3] border border-[#0071e3] px-6 py-2.5 rounded-full text-[17px] transition-colors flex items-center group hover:bg-[#0071e3] hover:text-white">
              Modülleri incele <ChevronRight size={16} strokeWidth={2.5} className="mt-0.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="absolute bottom-0 w-full max-w-[1000px] h-[45%] bg-[#fbfbfd] border-t border-x border-[#d2d2d7] rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] flex flex-col pt-6 px-8">
             <div className="flex gap-2 mb-6">
                 <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
             </div>
             <div className="w-full h-14 bg-white border border-[#d2d2d7] rounded-xl mb-4 flex items-center px-4">
               <div className="w-6 h-6 bg-[#f5f5f7] rounded-md mr-3"></div>
               <div className="w-48 h-4 bg-[#f5f5f7] rounded-full"></div>
             </div>
             <div className="flex gap-4 w-full h-full pb-8">
                <div className="flex-1 bg-white border border-[#d2d2d7] rounded-xl"></div>
                <div className="flex-[2] bg-white border border-[#d2d2d7] rounded-xl flex flex-col p-4 gap-3">
                   <div className="w-1/3 h-4 bg-[#f5f5f7] rounded-full"></div>
                   <div className="w-full flex-1 bg-[#f5f5f7] rounded-lg"></div>
                </div>
             </div>
          </div>
        </section>

        <section className="w-full h-[85vh] bg-black flex flex-col items-center pt-24 relative overflow-hidden shrink-0">
          <h2 className="text-[52px] md:text-[72px] font-semibold tracking-tight text-white leading-none text-center">Akıllı Ulaşım</h2>
          <h3 className="text-[26px] md:text-[32px] font-normal tracking-tight text-[#a1a1a6] mt-2 text-center">Trafik artık bir sır değil.</h3>
          
          <div className="flex items-center gap-4 mt-8 relative z-10">
            <Link href="#" className="bg-white text-black border border-white text-[17px] px-6 py-2.5 rounded-full transition-colors hover:bg-transparent hover:text-white">
              Daha fazla bilgi
            </Link>
            <Link href="#" className="bg-transparent text-[#2997ff] border border-[#2997ff] px-6 py-2.5 rounded-full text-[17px] transition-colors flex items-center group hover:bg-[#2997ff] hover:text-white">
              Canlı harita <ChevronRight size={16} strokeWidth={2.5} className="mt-0.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="absolute bottom-0 w-full h-[55%] flex items-end justify-center pb-12 opacity-80">
              <Bus size={300} strokeWidth={0.2} className="text-[#424245]" />
          </div>
        </section>

        <section className="w-full h-[85vh] bg-[#fbfbfd] flex flex-col items-center pt-24 relative overflow-hidden shrink-0">
          <h2 className="text-[52px] md:text-[72px] font-semibold tracking-tight text-[#1d1d1f] leading-none text-center">Kent Ekonomisi</h2>
          <h3 className="text-[26px] md:text-[32px] font-normal tracking-tight text-[#1d1d1f] mt-2 text-center max-w-xl">Hal fiyatları ve semt pazarları cebinizde.</h3>
          
          <div className="flex items-center gap-4 mt-8 relative z-10">
            <Link href="#" className="bg-[#0071e3] text-white border border-[#0071e3] text-[17px] px-6 py-2.5 rounded-full transition-colors hover:bg-transparent hover:text-[#0071e3]">
              Fiyatları Gör
            </Link>
            <Link href="#" className="bg-transparent text-[#0071e3] border border-[#0071e3] px-6 py-2.5 rounded-full text-[17px] transition-colors flex items-center group hover:bg-[#0071e3] hover:text-white">
              Pazarları bul <ChevronRight size={16} strokeWidth={2.5} className="mt-0.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="absolute bottom-0 w-full h-[45%] flex items-end justify-center overflow-hidden">
             <div className="w-full max-w-[1200px] h-full bg-[#f5f5f7] border-t border-x border-[#d2d2d7] rounded-t-[40px] flex justify-center items-start pt-16">
                 <ShoppingBasket size={120} strokeWidth={0.5} className="text-[#86868b]" />
             </div>
          </div>
        </section>
      </div>

      {/* ========================================================
          2. BÖLÜM: 6'LI GRID SISTEMİ
          (Kartların tümüne 'cursor-pointer' eklendi, artık tıklanabilir hissi veriyor)
      ======================================================== */}
      <section id="discover" className="w-full max-w-[2560px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white">
        <div className="bg-[#f5f5f7] h-[550px] flex flex-col items-center text-center pt-14 relative group overflow-hidden cursor-pointer">
          <h4 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-tight">Nöbetçi Eczaneler</h4>
          <p className="text-[19px] text-[#1d1d1f] mt-1">İzmir geneli anlık liste.</p>
          <div className="mt-6 flex gap-4 relative z-10">
             <Link href="/nobetci-eczane" className="text-[#0071e3] border border-[#0071e3] px-5 py-2 rounded-full text-[15px] font-semibold transition-colors hover:bg-[#0071e3] hover:text-white flex items-center gap-1 group/btn">
               Ara <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
             </Link>
          </div>
          <Activity size={180} strokeWidth={0.5} className="text-[#34c759] absolute bottom-[-40px] opacity-20" />
        </div>
        <div className="bg-black h-[550px] flex flex-col items-center text-center pt-14 relative group overflow-hidden cursor-pointer">
          <h4 className="text-[32px] md:text-[40px] font-semibold text-white tracking-tight">Su Rezervleri</h4>
          <p className="text-[19px] text-[#a1a1a6] mt-1">Tahtalı ve diğer barajlar.</p>
          <div className="mt-6 flex gap-4 relative z-10">
             <Link href="#" className="text-[#2997ff] border border-[#2997ff] px-5 py-2 rounded-full text-[15px] font-semibold transition-colors hover:bg-[#2997ff] hover:text-white flex items-center gap-1 group/btn">
               İncele <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
             </Link>
          </div>
          <Droplet size={180} strokeWidth={0.5} className="text-[#0a84ff] absolute bottom-[-40px] opacity-20" />
        </div>
        <div className="bg-[#f5f5f7] h-[550px] flex flex-col items-center text-center pt-14 relative group overflow-hidden cursor-pointer">
          <h4 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-tight">WizmirNET</h4>
          <p className="text-[19px] text-[#1d1d1f] mt-1">Ücretsiz Wi-Fi noktaları.</p>
          <div className="mt-6 flex gap-4 relative z-10">
             <Link href="#" className="text-[#0071e3] border border-[#0071e3] px-5 py-2 rounded-full text-[15px] font-semibold transition-colors hover:bg-[#0071e3] hover:text-white flex items-center gap-1 group/btn">
               Bağlan <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
             </Link>
          </div>
          <Wifi size={180} strokeWidth={0.5} className="text-[#86868b] absolute bottom-[-40px] opacity-20" />
        </div>
        <div className="bg-[#fbfbfd] border border-[#d2d2d7] h-[550px] flex flex-col items-center text-center pt-14 relative group overflow-hidden cursor-pointer">
          <h4 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-tight">Vapur Saatleri</h4>
          <p className="text-[19px] text-[#1d1d1f] mt-1">Körfezde kesintisiz ulaşım.</p>
          <div className="mt-6 flex gap-4 relative z-10">
             <Link href="#" className="text-[#0071e3] border border-[#0071e3] px-5 py-2 rounded-full text-[15px] font-semibold transition-colors hover:bg-[#0071e3] hover:text-white flex items-center gap-1 group/btn">
               Tarifeler <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
             </Link>
          </div>
        </div>
        <div className="bg-[#f5f5f7] h-[550px] flex flex-col items-center text-center pt-14 relative group overflow-hidden cursor-pointer">
          <h4 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-tight">Kültür & Sanat</h4>
          <p className="text-[19px] text-[#1d1d1f] mt-1">Güncel etkinlikler.</p>
          <div className="mt-6 flex gap-4 relative z-10">
             <Link href="#" className="text-[#0071e3] border border-[#0071e3] px-5 py-2 rounded-full text-[15px] font-semibold transition-colors hover:bg-[#0071e3] hover:text-white flex items-center gap-1 group/btn">
               Keşfet <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
             </Link>
          </div>
          <Ticket size={180} strokeWidth={0.5} className="text-[#ff9f0a] absolute bottom-[-40px] opacity-20" />
        </div>
        <div className="bg-black h-[550px] flex flex-col items-center text-center pt-14 relative group overflow-hidden cursor-pointer">
          <h4 className="text-[32px] md:text-[40px] font-semibold text-white tracking-tight">Afet Toplanma</h4>
          <p className="text-[19px] text-[#a1a1a6] mt-1">Acil durumlar için hazırlıklı olun.</p>
          <div className="mt-6 flex gap-4 relative z-10">
             <Link href="#" className="text-[#2997ff] border border-[#2997ff] px-5 py-2 rounded-full text-[15px] font-semibold transition-colors hover:bg-[#2997ff] hover:text-white flex items-center gap-1 group/btn">
               Harita <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
             </Link>
          </div>
          <Map size={180} strokeWidth={0.5} className="text-[#ff3b30] absolute bottom-[-40px] opacity-20" />
        </div>
      </section>

      {/* ========================================================
          3. BÖLÜM: KUSURSUZ ASİMETRİK PARALLAX CAROUSEL
      ======================================================== */}
      <section className="w-full pt-16 pb-32 bg-white border-t border-[#d2d2d7]/50 mt-4 overflow-hidden relative">
        <div className="max-w-[2560px] mx-auto px-6 md:px-[7.5vw] lg:px-[calc(50%-450px)] mb-8 relative z-20">
          <h3 className="text-[28px] font-semibold text-[#1d1d1f]">
            Geliştirici Araçları. <span className="text-[#86868b]">API dünyasını keşfedin.</span>
          </h3>
        </div>

        <AbsoluteOffsetCarousel interval={7000} />
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fillProgress { 0% { width: 0%; } 100% { width: 100%; } }
      `}} />
    </div>
  );
}

// ========================================================
// ÖZEL MOTOR: ABSOLUTE OFFSET CAROUSEL
// ========================================================

const rawSlides: SlideData[] = [
  {
    hero: { title: "API Dokümantasyonu", desc: "70 farklı veri setine nasıl bağlanacağınızı öğrenin.", bg: "bg-black", text: "text-white", sub: "text-[#a1a1a6]", icon: <Database size={300} strokeWidth={0.5}/>, btn: "bg-white text-black border border-white hover:bg-black hover:text-white" },
    mini: { title: "Buca Nöbetçi Eczaneler", link: "Görüntüle ↗" }
  },
  {
    hero: { title: "Gerçek Zamanlı Veri", desc: "WebSockets ile anlık otobüs ve trafik verisi çekimi.", bg: "bg-[#0071e3]", text: "text-white", sub: "text-white/80", icon: <Activity size={300} strokeWidth={0.5}/>, btn: "bg-white text-[#0071e3] border border-white hover:bg-transparent hover:text-white" },
    mini: { title: "Tahtalı Barajı Doluluk", link: "Görüntüle ↗" }
  },
  {
    hero: { title: "Açık Kaynak Projeler", desc: "İzmir Atlas'ın kod tabanına GitHub üzerinden katkıda bulunun.", bg: "bg-[#f5f5f7]", text: "text-[#1d1d1f]", sub: "text-[#1d1d1f]/70", icon: <Code2 size={300} strokeWidth={0.5}/>, btn: "bg-black text-white border border-black hover:bg-transparent hover:text-black", border: true },
    mini: { title: "Alsancak Otoparkları", link: "Görüntüle ↗" }
  },
  {
    hero: { title: "Programmatic SEO", desc: "Milyonlarca indekslenmiş mahalle ve sokak sayfası.", bg: "bg-[#1c1c1e]", text: "text-white", sub: "text-[#a1a1a6]", icon: <Globe size={300} strokeWidth={0.5}/>, btn: "bg-white text-black border border-white hover:bg-black hover:text-white" },
    mini: { title: "İZBAN Sefer Saatleri", link: "Görüntüle ↗" }
  },
  {
    hero: { title: "Sıfır Gecikmeli Edge API", desc: "Vercel Edge ağı üzerinden milisaniyelik veri yanıtı.", bg: "bg-[#000000]", text: "text-white", sub: "text-[#a1a1a6]", icon: <Cpu size={300} strokeWidth={0.5}/>, btn: "bg-[#0071e3] text-white border border-[#0071e3] hover:bg-transparent hover:text-[#0071e3]" },
    mini: { title: "Hava Kalitesi: Karşıyaka", link: "Görüntüle ↗" }
  },
  {
    hero: { title: "Webhooks & Uyarılar", desc: "Baraj dolulukları kritik seviyeye ulaştığında bildirim alın.", bg: "bg-[#fbfbfd]", text: "text-[#1d1d1f]", sub: "text-[#1d1d1f]/70", icon: <Zap size={300} strokeWidth={0.5}/>, btn: "bg-[#0071e3] text-white border border-[#0071e3] hover:bg-transparent hover:text-[#0071e3]", border: true },
    mini: { title: "Tarihi Asansör", link: "Görüntüle ↗" }
  }
];

const slideData: SlideData[] = rawSlides.map(s => ({ hero: s.hero, mini: s.mini }));
const infiniteSlides = Array(10).fill(slideData).flat();

function AbsoluteOffsetCarousel({ interval }: { interval: number }) {
  const [activeIndex, setActiveIndex] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const isScrollLocked = useRef(false);
  const wheelAccumulator = useRef(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveIndex((prev) => prev + 1);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [isPlaying, interval]);

  const triggerSlideChange = (direction: 'next' | 'prev') => {
    if (isScrollLocked.current) return;
    if (direction === 'next') setActiveIndex(i => i + 1);
    else setActiveIndex(i => i - 1);

    isScrollLocked.current = true;
    wheelAccumulator.current = 0;

    setTimeout(() => {
      isScrollLocked.current = false;
      wheelAccumulator.current = 0;
    }, 1100);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      setIsPlaying(false);
      if (isScrollLocked.current) return;

      wheelAccumulator.current += e.deltaX;
      
      if (wheelAccumulator.current > 40) triggerSlideChange('next');
      else if (wheelAccumulator.current < -40) triggerSlideChange('prev');
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsPlaying(false);
    if (e.targetTouches && e.targetTouches.length > 0) {
      const touch = e.targetTouches[0];
      if (touch) {
        setTouchStartX(touch.clientX);
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartX) return;
    if (e.changedTouches && e.changedTouches.length > 0) {
      const touchEndX = e.changedTouches[0]?.clientX;
      if (touchEndX === undefined) return;
      const distance = touchStartX - touchEndX;
      
      if (distance > 40) triggerSlideChange('next');
      else if (distance < -40) triggerSlideChange('prev');
    }
    setTouchStartX(0);
  };

  const logicalIndex = activeIndex % rawSlides.length;

  return (
    <div 
      className="w-full relative flex flex-col overflow-visible select-none touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      <div className="relative w-full h-[400px] md:h-[450px] overflow-visible">
        {infiniteSlides.map((slide, i) => (
          <div
            key={`hero-${i}`}
            className="absolute top-0 h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{
              width: '85vw',
              left: '50%',
              transform: `translateX(calc(-50% + (${i - activeIndex} * (85vw + 12px))))`,
            }}
          >
            <HeroBanner {...slide.hero} />
          </div>
        ))}
      </div>

      <div className="relative w-full h-[220px] md:h-[260px] overflow-visible mt-3">
        {infiniteSlides.map((slide, i) => (
          <div
            key={`mini-${i}`}
            className="absolute top-0 h-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{
              width: '45vw',
              left: '50%',
              transform: `translateX(calc(-50% + (${i - activeIndex} * (45vw + 12px))))`,
            }}
          >
            <MediumGrid title={slide.mini.title} link={slide.mini.link} />
          </div>
        ))}
      </div>

      <div className="w-full max-w-[900px] px-2 flex items-center justify-between mx-auto mt-12 relative z-30">
        <div className="w-12 hidden md:block"></div>

        <div className="flex items-center gap-3 mx-auto">
          {rawSlides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => {
                setIsPlaying(false);
                const currentSetStart = Math.floor(activeIndex / rawSlides.length) * rawSlides.length;
                setActiveIndex(currentSetStart + i);
              }}
              /* Burada 'cursor-pointer' ve hover efekti ekleyerek buton hissiyatını %100 belirgin kıldık */
              className={`relative h-2 rounded-full overflow-hidden transition-all duration-500 cursor-pointer hover:bg-[#d2d2d7]/80 ${i === logicalIndex ? 'w-12 bg-[#d2d2d7]' : 'w-2 bg-[#d2d2d7]/50'}`}
              aria-label={`Slayt ${i + 1}`}
            >
              {i === logicalIndex && isPlaying && (
                <div 
                  className="absolute top-0 left-0 h-full bg-[#1d1d1f]"
                  style={{ animation: `fillProgress ${interval}ms linear forwards`, width: '0%' }}
                />
              )}
            </button>
          ))}
        </div>
        
        <div className="w-12 flex justify-end">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            /* Oynat butonuna tıklanabilirlik özelliği eklendi */
            className="w-10 h-10 flex items-center justify-center bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed] rounded-full transition-all cursor-pointer"
            aria-label={isPlaying ? "Duraklat" : "Oynat"}
          >
            {isPlaying ? <Pause size={16} fill="currentColor" strokeWidth={0} /> : <Play size={16} fill="currentColor" strokeWidth={0} className="ml-1" />}
          </button>
        </div>
      </div>
    </div>
  );
}

// Dev Banner Tasarımı (Kartlara ve butonlara 'cursor-pointer' eklendi)
function HeroBanner({ title, desc, bg, text, sub, icon, btn, border }: any) {
  return (
    <div className={`w-full h-full ${bg} ${border ? 'border border-[#d2d2d7]/50' : ''} flex flex-col justify-end p-8 md:p-12 relative overflow-hidden group cursor-pointer`}>
      <div className={`absolute inset-0 bg-gradient-to-t ${bg === 'bg-black' || bg === 'bg-[#1c1c1e]' ? 'from-black/90' : 'from-transparent'} to-transparent z-10`}></div>
      <div className="relative z-20">
        <h4 className={`${text} text-[32px] md:text-[40px] font-bold tracking-tight leading-tight`}>{title}</h4>
        <p className={`${sub} mt-2 text-[17px] md:text-[19px] max-w-md`}>{desc}</p>
        {/* Butonlara cursor-pointer eklendi, sadece renk değişimi yapar */}
        <button className={`mt-6 ${btn} px-6 py-2.5 rounded-full text-[15px] font-semibold transition-colors cursor-pointer`}>Şimdi İzle</button>
      </div>
      <div className="text-white opacity-[0.03] absolute right-[-50px] top-10 pointer-events-none transition-transform duration-700 group-hover:scale-105">
         {icon}
      </div>
    </div>
  );
}

// Orta Boy Odaklı Kutu (Tüm karta cursor-pointer eklendi)
function MediumGrid({ title, link }: { title: string, link: string }) {
  return (
    <div className="w-full h-full bg-[#f5f5f7] p-8 md:p-10 flex flex-col justify-between transition-colors cursor-pointer">
       <h4 className="font-semibold text-[#1d1d1f] text-[22px] md:text-[28px] leading-tight pr-4">{title}</h4>
       {/* Buton Etkileşimi */}
       <div className="bg-white/80 border border-[#d2d2d7] w-max px-5 py-2.5 rounded-full mt-auto backdrop-blur-sm transition-colors hover:bg-[#0071e3] hover:border-[#0071e3] group/btn cursor-pointer">
         <span className="text-[#1d1d1f] group-hover/btn:text-white text-[14px] font-semibold flex items-center gap-1 transition-colors">{link}</span>
       </div>
    </div>
  );
}