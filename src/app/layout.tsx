import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ReduxProvider from "../store/ReduxProvider";

const montserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Музыкальный плеер",
  description: "Создан Архиповым Д.А. на курсе SkyPro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <ReduxProvider>
      <body className={montserat.className}>{children}</body>
      </ReduxProvider>
     
    </html>
  );
}
