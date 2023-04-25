import Head from "next/head";
import { Inter } from "next/font/google";
import style from "../styles/Index.module.css";
import Contacts from "@/component/Contacts";
import Sidebar from "@/component/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={style.nav}></div>
      <div className={style.main}>
        <Sidebar></Sidebar>
        <div className={style.content}>
          <Head></Head>
          <Contacts></Contacts>
        </div>
      </div>
    </>
  );
}
