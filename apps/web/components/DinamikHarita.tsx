"use client"; // İşte sihirli kelime! Bu bileşen sadece tarayıcıda çalışacak.

import dynamic from "next/dynamic";

// Haritayı burada dinamik olarak içeri alıyoruz
const EczaneHarita = dynamic(() => import("@/components/EczaneHarita"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-slate-800 animate-pulse rounded-xl flex items-center justify-center text-slate-400">
      Harita Yükleniyor...
    </div>
  ),
});

export default function DinamikHarita({ eczaneler }: { eczaneler: any[] }) {
  return <EczaneHarita eczaneler={eczaneler} />;
}