import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: "Mauricio Garay | DevOps & Digital Transformation Leader",
    template: "%s | Mauricio Garay"
  },
  description: "Sitio personal de Mauricio Garay, especialista en DevOps, Gestión del Cambio y Transformación Digital",
  keywords: ["DevOps", "Transformación Digital", "Gestión del Cambio", "Consultoría Tecnológica", "Cloud", "Microservicios"],
  authors: [{ name: "Mauricio Garay" }],
  creator: "Mauricio Garay",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://laloaggro.github.io",
    title: "Mauricio Garay | DevOps & Digital Transformation Leader",
    description: "Sitio personal de Mauricio Garay, especialista en DevOps, Gestión del Cambio y Transformación Digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}