import Head from 'next/head';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import styles from '@/styles/Home.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Web</title>
      </Head>
      <Header/>
      <section className={styles.l_addMaxWidth_xCenter_yColumn} id="areaTop">
        <div className={styles.l_xCenter_yColumn}>
          <h1>公開準備中</h1>
        </div>
      </section>
      <Footer />
    </>
  );
}
