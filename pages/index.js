import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner/Banner";
import SectionCard from "../components/card/SectionCard";
import NavBar from "../components/nav/NavBar";
import { getVideos } from "../lib/videos";
import styles from "../styles/Home.module.css";

export default function Home() {
  const disneyVides = getVideos();
  console.log(disneyVides);
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar userName="RapTor" />
      <Banner
        videoId="12"
        title="MovieName"
        subTitle="smthing about this movie"
        imgUrl="/static/clifford.webp"
      />
      <div className={styles.sectionWrapper}>
        <SectionCard title="Disney" videos={disneyVides} size="large" />
      </div>
      <div className={styles.sectionWrapper}>
        <SectionCard title="Youtub" videos={disneyVides} size="medium" />
      </div>
      <div className={styles.sectionWrapper}>
        <SectionCard title="Popular" videos={disneyVides} size="small" />
      </div>
    </div>
  );
}