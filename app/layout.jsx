import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TrailHive",
  description: "Your Ultimate Outdoor Companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title || "Default Title"}</title>
        <meta name="description" content={metadata.description || "Default Description"} />
      </head>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
