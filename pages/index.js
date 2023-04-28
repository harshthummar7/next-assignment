import Head from "next/head";
import style from "../styles/Index.module.css";
import Contacts from "@/component/Contacts";

export default function Home() {
  return (
    <>
      <div className={style.main}>
        <div className={style.content}>
          <Head></Head>
          <Contacts></Contacts>
        </div>
      </div>
    </>
  );
}
