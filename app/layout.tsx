import type { Metadata, Viewport } from "next";
import { Orbitron } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victimok Labs | Инженерный штаб и разработка",
  description:
    "Victimok Labs — разработка софта, кастомная сборка электроники и технический аудит.",
  keywords: ["Victimok Labs", "Разработка", "FPV", "CRM", "Инженерия"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`${orbitron.className} bg-[#050505] text-white min-h-screen antialiased`}
      >
        <Navbar />
        <div className="site-main">{children}</div>
      </body>
    </html>
  );
}
