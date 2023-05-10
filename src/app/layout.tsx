import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Tabs from "./_components/Tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js routing test",
  description: "Next.js project for testing routing features",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto py-10">
          <Tabs />
          <main className="pt-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
