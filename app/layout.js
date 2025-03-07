import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "VoxMark - Notation Vocale pour Excel",
  description:
    "Simplifiez la saisie des notes avec la reconnaissance vocale. Une solution innovante pour les enseignants utilisant Excel.",
  openGraph: {
    title: "VoxMark - Notation Vocale pour Excel",
    description:
      "Simplifiez la saisie des notes avec la reconnaissance vocale. Une solution innovante pour les enseignants utilisant Excel.",
    url: "https://voxmark.vercel.app",
    siteName: "VoxMark",
    images: [
      {
        url: "https://voxmark.vercel.app/assets/svg/grade-voice.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoxMark - Notation Vocale pour Excel",
    description:
      "Simplifiez la saisie des notes avec la reconnaissance vocale. Une solution innovante pour les enseignants utilisant Excel.",
    images: ["https://voxmark.vercel.app/assets/svg/grade-voice.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/svg/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/svg/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/svg/site.webmanifest" />
        <script
          async
          src="https://cal.com/embed.js"
          strategy="afterInteractive"
        ></script>
      </head>
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
