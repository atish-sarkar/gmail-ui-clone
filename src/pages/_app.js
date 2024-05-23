import LeftSideBar from "@/menus/left-side-bar";
import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/left-side-bar.css";
import "@/styles/right-side-bar.css";
import "@/styles/mail.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gmail</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <LeftSideBar Component={Component} pageProps={pageProps} />
    </>
  );
}
