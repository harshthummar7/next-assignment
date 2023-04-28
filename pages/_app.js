import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar } from "@/component/Navbar";
import { Sidebar } from "@/component/Sidebar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}
