import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MouseGlow from "./components/MouseGlow";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "下園 司 | ポートフォリオ",
  description: "下園 司のポートフォリオサイト。Web開発の作品やスキルを紹介しています。",
  openGraph: {
    title: "下園 司 | ポートフォリオ",
    description: "下園 司のポートフォリオサイト。Web開発の作品やスキルを紹介しています。",
    images: [{ url: "/ogp.png", width: 1200, height: 630 }],
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "下園 司 | ポートフォリオ",
    description: "下園 司のポートフォリオサイト。Web開発の作品やスキルを紹介しています。",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased relative`}
      >
        <MouseGlow />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

