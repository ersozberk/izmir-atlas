import "./globals.css";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col w-full overflow-x-hidden">
        <Header />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}