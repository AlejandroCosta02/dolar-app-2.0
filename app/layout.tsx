import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  weight: ["100", "300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Precio Dolar Arg",
  description: "Ultima cotización del dolar - Argentina -",
  keywords: [
    "dolarblue",
    "dolar argentina",
    "dolar cotizacion",
    "argentina dolar blue",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <Head>
          <Script type="text/javascript">
            {` 
            const atOptions = {
                'key': '9e2de510e220d13593268cac379b7040',
                'format': 'iframe',
                'height': 90,
                'width': 728,
                'params': {}
              };
              document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitabledisplaynetwork.com/9e2de510e220d13593268cac379b7040/invoke.js"></scr' + 'ipt>')`}
          </Script>
        </Head>
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
          <GoogleAnalytics measurementId="G-0FL3YES4FQ" />
          {/* ADS */}

          {/* END SCRIPT */}
        </body>
      </html>
    </>
  );
}
