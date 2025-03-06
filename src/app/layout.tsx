

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head
import "node_modules/react-modal-video/css/modal-video.css";
import Script from "next/script"; // Import next/script for external scripts
import "../styles/index.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import Chatbot from "@/components/Chatbot/Chatbot";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RR Builder Mangalore",
  description:
    "RR Builder Mangalore offers premium real estate and construction services. Find top-quality apartments and properties in Mangalore.",
    icons: {
      icon: "images/logohalf.png", 
    },
  keywords: [
    "RR Builder Mangalore",
    "real estate Mangalore",
    "construction company Mangalore",
    "builders in Mangalore",
    "property developers Mangalore",
    "apartments for sale Mangalore",
    "luxury homes Mangalore",
    "commercial properties Mangalore",
    "real estate agents Mangalore",
    "property investment Mangalore",
  ],
  robots: "index, follow",
  openGraph: {
    title: "RR Builder Mangalore | Best Real Estate & Construction Services",
    description:
      "Explore top real estate and construction services in Mangalore. Find premium residential and commercial properties with RR Builder Mangalore.",
    url: "", // Replace with actual website URL
    type: "website",
    images: [
      {
        url: "", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "RR Builder Mangalore - Real Estate & Construction Services",
      },
    ],
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
     {/* <Head>
        <title>RR Builder</title> 
        <meta name="Construction and Real estate at Mangalore" content="Apartment Construction and Real estate at B C Mangalore." />
        <link rel="icon" href="/images/favicon.ico" />
      </Head> */}

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
          {/* <Script id="chatling-config" strategy="afterInteractive">
          {`
            window.chtlConfig = { chatbotId: "2682348685" };
          `}
        </Script>

        <Script
          id="chatling-embed"
          strategy="afterInteractive"
          src="https://chatling.ai/js/embed.js"
          async
        /> */}
        <Chatbot/>
      </body>
    </html>
  );
}

