import Head from "next/head";
import Image from "next/image";
import MainPage from "../src/pages/mainPage/MainPage";
import styles from "../styles/Home.module.scss"; 

export default function Home() {
  return ( 
    <div className={styles.container}> 
        <MainPage /> 
    </div> 
  );
}
