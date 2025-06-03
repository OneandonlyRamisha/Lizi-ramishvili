import { Analytics } from "@vercel/analytics/next";
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lizi Ramishvili",
              alternateName: "Liziramishvili",
              birthDate: "1997-05-06",
              birthPlace: {
                "@type": "Place",
                name: "Tbilisi, Georgia",
              },
              nationality: "Georgian",
              jobTitle: "Classical Cellist / Musician",
              url: "https://liziramishvili.com",
              image: "https://liziramishvili.com/cover.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tbilisi",
                addressCountry: "Georgia",
              },
              sameAs: [
                "https://www.instagram.com/lizi_ramishvili_/",
                "https://www.facebook.com/p/Lizi-Ramishvili-100080192833048/",
              ],
              description:
                "Lizi Ramishvili is an internationally recognized classical cellist from Georgia. She has performed at Carnegie Hall, Berlin Konzerthaus, and festivals around the world, winning prestigious awards and collaborating with world-renowned musicians.",
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Paliashvili Central Music School",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Kronberg Academy Pre-College",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Haute École de Musique de Genève",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Reina Sofía School of Music",
                },
              ],
              award: [
                "First Prize & Golden Nutcracker – Nutcracker International TV Competition (Russia)",
                "Grand Prize – Renaissance International Competition (Armenia)",
                "Tsinandali Award for Young Scholars and Artists (2017)",
                "Eurovision Young Musicians Finalist (2012)",
                "Forbes Georgia '30 Under 30' (2021)",
              ],
              memberOf: [
                "Freixenet Symphony Orchestra",
                "Deloitte Mozart Trio",
                "Sibelius Ensemble",
                "Dvořák Quartet",
              ],
              performerIn: [
                "Carnegie Hall (New York)",
                "Berlin Konzerthaus",
                "Rheingau Music Festival",
                "Ruhr Piano Festival",
                "Musica Mundi",
                "Young Euro Classic",
                "Kronberg Academy Festival",
                "Energy for Life",
                "Arpeggione",
                "Peregrinos Musicales",
                "Al Bustan Festival",
                "International Mstislav Rostropovich Festival",
                "Moscow Meets Friends",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Independent Artist",
              },
            }),
          }}
        />
      </head>
      <body>
        {/* <Navigation /> */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
