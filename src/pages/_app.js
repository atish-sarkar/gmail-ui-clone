import LeftSideBar from "@/menus/left-side-bar";
import "@/styles/globals.css";
import "@/styles/left-side-bar.css";
import "@/styles/right-side-bar.css";
import "@/styles/mail.css";

export default function App({ Component, pageProps }) {
  return <LeftSideBar Component={Component} pageProps={pageProps} />;
}
