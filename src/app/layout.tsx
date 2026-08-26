import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { LangProvider } from "@/i18n/LangContext";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mentora - платформа онлайн-курсів",
  description:
    "Mentora - навчальна платформа з курсами від практиків: розробка, дизайн, дані, маркетинг. Каталог курсів, кабінет студента з прогресом та досягненнями.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={`${instrument.variable} ${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper font-body text-ink">
        <LangProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
