import Head from 'next/head';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function About() {
  return (
    <>
      <Header/>
      <h1>Hello world</h1>
      <Footer />
    </>
  );
}
