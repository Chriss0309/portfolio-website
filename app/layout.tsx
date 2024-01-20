import Header  from "@/components/header";
import "./globals.css";
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Christopher | Personal Portfolio',
  description: 'Christopher portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        
        {/* Star Background Elements */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>

      </body>
    </html>
  );
}
