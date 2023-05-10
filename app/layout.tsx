import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  weight: ["100", "300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dolar Blue",
  description: "Ultima cotización del dolar blue - Argentina -",
  keywords: [
    "dolarblue",
    "dolar argentina",
    "dolar cotizacion",
    "argentina dolar blue",
  ],
  images: [
    {
      url: "https://nextjs.org/og.png",
      width: 800,
      height: 600,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} dark:bg-white`}>
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <main className="flx-grow">{children}</main>
        </div>
        <Footer />

        {/* START SCRIPT */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
        {/* END SCRIPT */}
      </body>
    </html>
  );
}
