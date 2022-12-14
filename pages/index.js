import Head from "next/head";
import { useState } from "react";
import Jobs from "../components/Jobs";
import NavBar from "../components/NavBar";
import { useAppContext } from "../NotWorkingContext";


const styles = {
  wrapper: `bg-[#f4f6f8] dark:bg-[#121721] min-h-screen transition duration-500 text-black dark:text-white items-center mx-auto justify-center`,
};

export default function Home() {
  const {darkMode, setDarkMode} = useAppContext();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Head>
        <title>DevJobs App || Made by Okechukwu with Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Jobs />
        
      </div>
    </div>
  );
}
