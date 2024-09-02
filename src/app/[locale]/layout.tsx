import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "./globals.css";

import type { Metadata } from "next";
import LangSwitcher from "@/components/langSwitcher";
import { Locale } from "@/config";
import Footer from "@/components/footer";
import Mouseflow from "@/scripts/mouseflow";

const inter = Inter({ subsets: ["latin"] });

const humane = localFont({
  src: [
    {
      path: "../../../public/fonts/Humane-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Humane-Medium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Humane-SemiBold.otf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Humane-Bold.otf",
      weight: "800",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Humane-Light.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Humane-ExtraLight.otf",
      weight: "200",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Humane-Thin.otf",
      weight: "100",
      style: "normal"
    }
  ],
  variable: "--font-humane"
});

export const metadata: Metadata = {
  title: "David Figuera Portfolio",
  description: "Portfolio personal"
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${inter.className} ${humane.variable} ${GeistSans.variable}`}
      >
        <LangSwitcher locale={locale} />
        <main>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </main>
        <Footer />
        <Mouseflow />
      </body>
    </html>
  );
}
