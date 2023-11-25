import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { useRef, useState } from "react";
import useIntersectionObserver from "@/hocks/useHandleIsShow";

type WORK = {
  id: number;
  occupation: string;
  media: string;
  imgSrc: string;
  text: string;
};

const WORKS: WORK[] = [
  {
    id: 0,
    occupation: "DTP",
    media: "paper",
    imgSrc: "/content_paper.jpg",
    text: "紙媒体のポートフォリをまとめています",
  },
  {
    id: 1,
    occupation: "web",
    media: "web",
    imgSrc: "/content_web.jpg",
    text: "webブラウザのポートフォリをまとめています",
  },
];

export default function Home() {
  const areaTopRef = useRef<HTMLDialogElement>(null);
  const areaProfileRef = useRef<HTMLDialogElement>(null);
  const areaWorkRef = useRef<HTMLDialogElement>(null);
  const [iconActiveIndex, setIconActiveIndex] = useState(0);
  const activeSectionCallback = (index: number) => {
    setIconActiveIndex(index);
  };

  const showElements = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "areaTop":
            setIconActiveIndex(0);
            break;
          case "areaProfile":
            setIconActiveIndex(1);
            break;
          case "areaWork":
            setIconActiveIndex(2);
            break;
          default:
            break;
        }
      }
    });
  };

  const IntersectionOptions = {
    rootMargin: "0% 0% -80% 0%",
    threshold: 0.1,
  };

  useIntersectionObserver(
    [areaTopRef, areaProfileRef, areaWorkRef],
    showElements,
    IntersectionOptions,
  );

  return (
    <>
      <Head>
        <title>Satoshi&apos;s Portfolio</title>
      </Head>
      <section id="areaTop" ref={areaTopRef}>
        <Header
          itemState={iconActiveIndex}
          isShowSection={activeSectionCallback}
        ></Header>
      </section>
      <main>
        <div className="mx-0 mb-20 sm:mb-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-[90vh] object-cover sepia filter sm:h-screen sm:w-full"
            src="/mainVisualAutumn.jpg"
            alt="mainVisual"
          />
        </div>

        <section
          className="mb-20 mt-4 sm:mx-auto sm:mb-0 sm:max-w-screen-lg sm:pt-20"
          id="areaProfile"
          ref={areaProfileRef}
        >
          <div className="mx-4 flex flex-col items-center">
            <h1 className="mb-6 capitalize">Profile</h1>
            <div className="flex items-start justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="mr-4 h-24 w-24 rounded-full"
                src="/profile_polkaDot.jpg"
                alt="プロフィール写真"
                width={96}
                height={96}
                sizes="(max-width:640px) 100vh,(max-width:1200px) 100vh,100vh"
              />
              <div>
                <h2 className="h-24 leading-tight">
                  SATOSHI
                  <br />
                  KAGEYAMA
                </h2>
                <p>マルチメディアデザイナー</p>
                {/* <p>小さいことの積み重ねが、とんでもないところに行くただひとつの道</p> */}
                <p>ストレスフリーな体験を大切にしています</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mb-20 mt-4 min-h-screen sm:mx-auto sm:mb-0 sm:max-w-screen-lg sm:pt-20"
          id="areaWork"
          ref={areaWorkRef}
        >
          <div className="flex flex-col items-center">
            <h1 className="mx-4 mb-6 capitalize">Work</h1>
            <ul className="grid w-full auto-cols-auto gap-x-8 gap-y-16 sm:grid-cols-2">
              {WORKS.map((item: WORK) => (
                <ContentCard
                  key={item.occupation}
                  imgSrc={item.imgSrc}
                  media={item.media}
                  text={item.text}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
