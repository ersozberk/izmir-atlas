import { supabase } from "@/lib/supabase";
import DinamikHarita from "@/components/DinamikHarita";
import Link from "next/link";

export const revalidate = 3600; 

export default async function Home() {
  const { data: eczaneler, error } = await supabase
    .from("nobetci_eczaneler")
    .select("*");

  if (error) {
    console.error("Veri çekme hatası:", error);
    return <div className="text-red-500 text-center mt-10">Veriler yüklenemedi.</div>;
  }

// 1. VERİ TEMİZLİĞİ VE BİRLEŞTİRME:
  const temizIlceler = eczaneler?.map((e) => {
    // İlçe adındaki tüm rakamları sil ve sondaki/baştaki boşlukları temizle ("BORNOVA 1" -> "BORNOVA")
    return e.ilce.replace(/[0-9]/g, '').trim();
  }) || [];

  // Tekrarları sil (Örneğin 4 tane BORNOVA'yı 1'e düşür) ve alfabetik sırala
  const aktifIlceler = Array.from(new Set(temizIlceler)).sort();
  
  return (
    <div className="w-full h-full flex flex-col items-center p-4 max-w-7xl mx-auto">
      
      <div className="text-center my-6 space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent pb-2">
          İzmir Kent Açık Veri
        </h1>
        <p className="text-slate-400 font-medium text-lg">
          Bugün İzmir genelinde <span className="text-teal-400 font-bold">{eczaneler?.length || 0}</span> adet nöbetçi eczane bulunmaktadır.
        </p>
      </div>

      <div className="w-full relative z-10 mb-12">
        <DinamikHarita eczaneler={eczaneler || []} />
      </div>

     {/* 2. PSEO İÇ BAĞLANTI AĞI (Premium Silo Menüsü) */}
      <div className="w-full mt-8 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-700"></div>
          <h2 className="text-2xl font-bold text-slate-200 tracking-wide">
            İlçelere Göre Arama
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-slate-700"></div>
        </div>
        
        {/* Modern, havadar ve responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {aktifIlceler.map((ilce) => {
            const urlSlug = encodeURIComponent(ilce.toLocaleLowerCase("tr-TR"));
            
            return (
              <Link 
                key={ilce} 
                href={`/nobetci-eczane/${urlSlug}`}
                className="relative overflow-hidden group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-teal-500/10"
              >
                {/* Sol Taraf: İkon ve Yazı */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-slate-900/80 flex items-center justify-center border border-slate-700 group-hover:border-teal-500/50 group-hover:text-teal-400 transition-colors">
                    <span className="text-sm">📍</span>
                  </div>
                  <span className="text-slate-300 font-semibold tracking-wide text-sm group-hover:text-white transition-colors">
                    {ilce}
                  </span>
                </div>

                {/* Sağ Taraf: Ok İşareti */}
                <span className="text-slate-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all duration-300 relative z-10">
                  →
                </span>

                {/* Arka Plan Hover Parlaması (Glow Effect) */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}