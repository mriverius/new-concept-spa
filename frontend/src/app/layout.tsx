import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Concept Spa | Luxury Beauty & Wellness",
  description: "Experience luxury treatments, expert care, and total relaxation at New Concept Spa in Moravia, Costa Rica.",
  icons: {
    icon: '/logoncs.png',
    shortcut: '/logoncs.png',
    apple: '/logoncs.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
