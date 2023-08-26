import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Paper</title>
      </Head>
      <Header />
      <section
        className="pt-20 sm:mx-auto sm:max-w-screen-lg"
        id="paperAreaTop"
      >
        <div className="flex flex-col items-center">
          <h1>公開準備中</h1>
        </div>
      </section>
      <Footer />
    </>
  );
}
