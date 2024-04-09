/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { useRef, useState } from "react";
import useIntersectionObserver from "@/hocks/useHandleIsShow";
import { Work } from "@/types/portfolioTypes";

const Works: Work[] = [
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
        <section id="mainVisual">
          <div className="mx-0 mb-20 h-[100vh] w-[100vw] pb-14 pt-0 sm:mb-0 sm:pb-0 sm:pt-20">
            <picture className="object-cover filter">
              <source
                className="h-full w-screen object-cover"
                media="(max-width: 432px)"
                srcSet="/mainVisualSpring_mdv_@Sebastian-Hans.webp 640w"
                width="360"
                height="640"
              />
              <source
                className="h-full w-screen object-cover"
                media="(max-width: 640px)"
                srcSet="/mainVisualSpring_mdv_@Sebastian-Hans.webp 432w"
                width="432"
                height="768"
              />
              <source
                className="h-full w-screen object-cover"
                media="(max-width: 1920px)"
                srcSet="/mainVisualSpring_FH_@Sebastian-Hans.webp 1920w"
                width="1920"
                height="1080"
              />
              <img
                className="h-full w-screen object-cover"
                src="/mainVisualSpring_FH_@Sebastian-Hans.jpg"
                alt="mainVisual"
                width="1920"
                height="1080"
                loading="lazy"
              />
            </picture>
          </div>
          <p className="absolute bottom-14 right-0 text-white sm:bottom-0">
            &copy;Sebastian Hans
          </p>
        </section>

        <section
          className="mb-20 mt-4 sm:mx-auto sm:mb-0 sm:max-w-screen-lg sm:pt-20"
          id="areaProfile"
          ref={areaProfileRef}
        >
          <div className="mx-4 flex flex-col items-center">
            <h1 className="mb-6 capitalize">Profile</h1>
            <div className="flex items-start justify-center">
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
                <p>
                  ウェブデザイナー
                  <br />
                  紙、web問わず対応しています
                </p>
                {/* <p>小さいことの積み重ねが、とんでもないところに行くただひとつの道</p> */}
                <p>
                  提供するサービスを通じて、ストレスフリーな体験をお届けできるよう尽力しています
                </p>
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
              {Works.map((item: Work) => (
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
