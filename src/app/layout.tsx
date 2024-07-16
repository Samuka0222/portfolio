import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ToggleLanguage } from "@/components/ToggleLanguage";

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
        "flex flex-col justify-center items-center antialiased dark bg-gradient-to-br from-background to-foreground overflow-x-hidden",
        inter.className
      )}
      >
        <ToggleLanguage />
        {children}
      </body>
    </html>
  );
}
