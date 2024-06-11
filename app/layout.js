//import Head from "next/head";
import "./globals.css";

import Navbar from "./componets/nav/nav";
import Footer from "./componets/footer/footer";

export const metadata = {
  title: "Malpo",
  description: "Web Malpo",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link
            rel="icon"
            href="/favicon.ico"
            type="image/x-icon"
            sizes="192x192"
          ></link>
        </head>
        <body className="lato-regular">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
