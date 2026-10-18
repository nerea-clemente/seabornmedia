import type { Metadata, Viewport } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";

const parkinsans = Parkinsans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-parkinsans",
  display: "swap",
});

const title = "SeaBorn Media · Tu agencia de marketing y comunicación seafood";
const description =
  "Agencia de marketing y comunicación especializada en seafood, pesca y acuicultura. Próximamente.";
const url = "https://www.seabornmedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  applicationName: "SeaBorn Media",
  creator: "SeaBorn Media",
  publisher: "SeaBorn Media",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url,
    title,
    description,
    siteName: "SeaBorn Media",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#29486B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-ES" className={parkinsans.variable}>
      <body>{children}</body>
    </html>
  );
}
