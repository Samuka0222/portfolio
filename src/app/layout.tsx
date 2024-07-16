import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samuel Machado",
  description: "My Personal Portfolio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(
        "antialiased dark bg-gradient-to-br from-background to-foreground overflow-x-hidden",
        inter.className
      )}
      >
        {children}
      </body>
    </html>
  );
}
