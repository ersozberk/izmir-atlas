import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "İzmir Nöbetçi Eczaneler ve Kent Rehberi",
  description: "İzmir açık verileriyle oluşturulmuş anlık nöbetçi eczane haritası, ulaşım bilgileri ve bölgesel detaylar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-950 flex flex-col items-center">
          {/* Gelecekte eklenecek araçlar için mobil uyumlu, ortalanmış konteyner */}
          <main className="w-full max-w-2xl min-h-screen flex flex-col relative shadow-2xl bg-slate-900/50 ring-1 ring-white/10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}