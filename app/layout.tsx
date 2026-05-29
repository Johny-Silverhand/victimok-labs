import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { Navbar } from "@/components/Navbar"; // Импортируем наше меню
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: 'Victimok Labs | Инженерный штаб и разработка',
  description: 'Victimok Labs — разработка софта, кастомная сборка электроники и технический аудит.',
  keywords: ['Victimok Labs', 'Разработка', 'FPV', 'CRM', 'Инженерия'],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${orbitron.className} bg-[#050505] text-white min-h-screen antialiased`}>
        {/* Рендерим меню сверху */}
        <Navbar />
        
        {/* Сдвигаем основной контент вниз на pt-24, чтобы меню его не закрывало */}
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}


