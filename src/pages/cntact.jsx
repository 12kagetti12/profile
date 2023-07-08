import Head from 'next/head';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import styles from '@/styles/Home.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>Cntact</title>
      </Head>
      <Header/>
      <div  id="areaTop">
        <h1>Hello world</h1>
      </div>
      <Footer />
    </>
  );
}
