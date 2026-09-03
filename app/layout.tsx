import type { Metadata, Viewport } from "next";
import { Orbitron } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import "./globals.css";
import "./auth.css";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victimok Labs | Инженерный штаб и разработка",
  description:
    "Victimok Labs — разработка софта, ремонт электроники и сборка FPV-дронов.",
  keywords: ["Victimok Labs", "Разработка", "FPV", "ремонт", "Инженерия"],
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
        <Providers>
          <Navbar />
          <div className="site-main">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
