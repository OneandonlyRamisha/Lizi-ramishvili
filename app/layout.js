import "./globals.css";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // you can adjust weights
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Lizi Ramishvili | Cellist",
  description:
    "Official website of Lizi Ramishvili, world-renowned Georgian cellist known for her international performances and awards.",
  keywords: [
    "Lizi Ramishvili",
    "Cellist",
    "Classical Musician",
    "Georgian Cellist",
    "Violin-Cellist",
    "Concert Cellist",
    "Musician",
  ],
  openGraph: {
    title: "Lizi Ramishvili | Cellist",
    description:
      "Explore the official website of Lizi Ramishvili, award-winning classical cellist from Georgia performing globally.",
    url: "https://liziramishvili.com",
    siteName: "Lizi Ramishvili",
    images: [
      {
        url: "/cover.jpg", // Place an image in /public
        width: 1200,
        height: 630,
        alt: "Lizi Ramishvili performing live",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lizi Ramishvili",
    description:
      "Georgian cellist with global recognition. Explore her journey, concerts, and awards.",
    images: ["/cover.jpg"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
