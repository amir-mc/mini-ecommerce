import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ToastProvider from "@/components/ToastProvider";
import {
  ClerkProvider
} from '@clerk/nextjs'
import ReactQueryProvider from "@/provider/reactquery";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIGI STORE",
  description: "Digital market",
};

export default function RootLayout({
  children,
  ads
}: Readonly<{
  children: React.ReactNode;
  ads: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider>
      <ReactQueryProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
      <Navbar />
      <main className="pt-20">
        <div className=" flex items-center justify-end mb-2">
      {ads}

      </div>
        {children}
        <ToastProvider />
        <Toaster/>
      </main>  
      <Footer/>
      </body>
    </html>
    </ReactQueryProvider>
    </ClerkProvider>
  );
}
