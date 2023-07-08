import Head from 'next/head';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import styles from '@/styles/Home.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Header/>
      <div id="areaTop">
        <h1>Hello world</h1>
      </div>
      <Footer />
    </>
  );
}
