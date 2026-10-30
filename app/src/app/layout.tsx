import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daporbakes · Stok bahan",
  description: "Catat dan pantau stok bahan baku Daporbakes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
