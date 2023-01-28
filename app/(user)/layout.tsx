'use client'
import "../../styles/globals.css";
import localfont from "@next/font/local";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {motion , AnimatePresence} from 'framer-motion'
import { AnalyticsWrapper } from '../../components/Analytics';
const RandomFont = localfont({
  src: [
    {
      path: "../../public/fonts/Random/RG-StandardBook.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Random/RG-StandardBold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Random/RG-StandardMedium.ttf",
      weight: "500",
    },

    {
      path: "../../public/fonts/Random/RG-StandardSemibold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Random/RG-SpaciousBook.ttf",
      weight: "300",
    },
  ],
  variable: "--font-random",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${RandomFont.variable} bg-background`} lang="en">
      <body className="overflow-x-hidden">
        {/* <AnimatePresence> */}
        <AnalyticsWrapper />
        <Header />
        {children}
        <Footer />
        {/* </AnimatePrese/nce> */}
      </body>
    </html>
  );
}
