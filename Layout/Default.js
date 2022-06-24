import Head from "next/head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Default({ children }) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
