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
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:alt" content="About Acme" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
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
