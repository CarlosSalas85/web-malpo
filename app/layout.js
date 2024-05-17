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
