import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rota Motors",
  description: "Rota Motors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
