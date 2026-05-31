import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Mateo Salgado — Full Stack Developer",
  description:
    "Portafolio de Mateo Alejandro Salgado Salgado. Desarrollador Full Stack especializado en Next.js, Python/Django y Flutter. Disponible para proyectos remotos.",
  openGraph: {
    title: "Mateo Salgado — Full Stack Developer",
    description:
      "Desarrollador Full Stack en Manizales, Colombia. Next.js, Python/Django, Flutter, Firebase.",
    url: "https://mateo-salgado-portafolio.vercel.app",
    siteName: "Mateo Salgado Portfolio",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${syne.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
