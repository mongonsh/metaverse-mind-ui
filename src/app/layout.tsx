import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metaverse mind",
  description: "Нийтлэл",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mongolian&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
