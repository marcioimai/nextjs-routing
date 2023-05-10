import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
        <nav>
          <Link href="/parallel">Parallel Routes</Link>
          <Link href="/dynamic">Dynamic Routes</Link>
          <Link href="/intercepting">Intercepting Routes</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
