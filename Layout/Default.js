import Head from "next/head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Default({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
