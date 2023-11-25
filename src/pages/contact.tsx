import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useRef } from "react";
import useIntersectionObserver from "@/hocks/useHandleIsShow";

export default function Contact() {
  const areaContactRef = useRef<HTMLDialogElement>(null);
  const [iconActiveIndex, setIconActiveIndex] = useState(2);
  const activeSectionCallback = (index: number) => {
    setIconActiveIndex(index);
  };

  const showElements = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "areaWork":
            setIconActiveIndex(3);
            break;
          default:
            break;
        }
      }
    });
  };

  useIntersectionObserver([areaContactRef], showElements);

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Header
        itemState={iconActiveIndex}
        isShowSection={activeSectionCallback}
      ></Header>
      <main>
        <section
          className="pt-20 sm:mx-auto sm:max-w-screen-lg"
          id="areaTop"
          ref={areaContactRef}
        >
          <div className="flex flex-col items-center">
            <h1>公開準備中</h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
