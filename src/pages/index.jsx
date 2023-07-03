import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { ContentCard } from '@/components/ContentCard/CotentCard'

const inter = Inter({ subsets: ['latin'] })

const WORK = [
  {
    id: 0,
    occupation: "DTP",
    media: "paper", 
    imgSrc: "/content_paper.jpg",
    text: "紙媒体のポートフォリをまとめています"
  },
  {
    id: 1,
    occupation : "web",
    media : "web", 
    imgSrc : "/content_web.jpg", 
    text : "webブラウザのポートフォリをまとめています"
  }
]

export default function Home() {

  return (
    <>
      <Head>
        <title>Sstoshi's Portfolio</title>
      </Head>
      <Header/>
      <main className="">
        <div className={styles.c_mainVisual} id="area_top">
          <Image
            className={styles.c_responsive}
            src="/mainvisual_seaClouds.jpg"
            alt="mainVisual"
            width={1920}
            height={1280}
            sizes="(max-width:640px) 100vw,(max-width:1200px) 100vw,100vw"
            priority
          />
        </div>

        <section className={styles.l_addMaxWidth_xCenter_yColumn} id="area_profile">
          <div className={styles.l_xCenter_yColumn}>
            <h1 className={`${styles.p_sectionTitleMargin} ${styles.p_sectionTitleUnderline}`}> Profile</h1>
            <div className={styles.l_xCenter_yCenter}>
              <img className={styles.p_roundUpImage} src="/profile_水玉模様.jpg" alt="プロフィール写真"/>
              <div>
                <h2 className={styles.p_contentTitleMargin}>SATOSHI KAGEYAMA</h2>
                <p>マルチメディアデザイナー</p>
                {/* <p>小さいことの積み重ねが、とんでもないところに行くただひとつの道</p> */}
                <p>明日が今日よりも良き日であるように、今 "　　" に何ができるのか？</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.l_addMaxWidth_xCenter_yColumn} id="area_work">
          <div className={styles.l_xCenter_yColumn}>
            <h1 className={`${styles.p_sectionTitleMargin} ${styles.p_sectionTitleUnderline}`}>Work</h1>
            <ul className={styles.l_grid_x25rem_1fr}>
              {WORK.map((item) => (
                <ContentCard
                  key = {item.occupation}
                  imgSrc = {item.imgSrc}
                  media = {item.media}
                  text = {item.text}
                />
              ))}
            </ul>  
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
