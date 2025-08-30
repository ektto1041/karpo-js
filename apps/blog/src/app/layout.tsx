import { Footer, Header } from "@/components";
import "@karponents-ui/karpotic/dist/style.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karpo-js",
  description: "Karpo's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
