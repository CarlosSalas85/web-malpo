//import Head from "next/head";
import "./globals.css";

import Navbar from "./componets/nav/nav";
import Footer from "./componets/footer/footer";
import { Ctrl_redes_sociales } from "./controllers/Ctrl_redes_sociales";

export const metadata = {
  title: "Malpo",
  description: "Web Malpo",
};

export default async function RootLayout({ children }) {
  const redes = await Ctrl_redes_sociales();
  return (
    <>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="192x192"></link>
        </head>
        <body className="lato-regular">
          <Navbar />
          {children}
          <Footer redes={redes}/>
        </body>
      </html>
    </>
  );
}
