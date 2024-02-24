import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useRef, useCallback, useEffect } from "react";
import ContentList from "@/components/ContentList";
import useIntersectionObserver from "@/hocks/useHandleIsShow";
import dynamic from "next/dynamic";

const ModalCard = dynamic(() => import("@/components/ModalCard"));

type PaperJob = {
  id: number;
  occupation: string;
  media: string;
  imgSrc: string;
  client: string;
  text: string;
  url: string;
};

const paperJobs: PaperJob[] = [
  {
    id: 0,
    occupation: "WEB",
    media: "Demo Site Cafe",
    imgSrc: "#",
    client: "Demo",
    text: "#",
    url: "/demoCafe",
  },
];

export default function Web() {
  const areaWorkRef = useRef<HTMLDialogElement>(null);
  const [iconActiveIndex, setIconActiveIndex] = useState(2);
  const activeSectionCallback = (index: number) => {
    setIconActiveIndex(index);
  };

  const showElements = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "areaWork":
            setIconActiveIndex(2);
            break;
          default:
            break;
        }
      }
    });
  };

  useIntersectionObserver([areaWorkRef], showElements);

  const [isShow, setIsShow] = useState(() => {
    const jobsLength: number = paperJobs.length;
    return Array.from({ length: jobsLength }, () => false);
  });

  const toggleVisibility = useCallback((id: number) => {
    setIsShow((prevIsShow: boolean[]) => {
      const newIsShow = [...prevIsShow];
      newIsShow[id] = !prevIsShow[id];
      return newIsShow;
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isShow.some((element) => element === true)
      ? "hidden"
      : "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isShow]);

  return (
    <>
      <Head>
        <title>Web</title>
      </Head>
      <Header
        itemState={iconActiveIndex}
        isShowSection={activeSectionCallback}
      ></Header>
      <main ref={areaWorkRef}>
        <section
          className="mx-4 mt-4 sm:mx-auto sm:mb-0 sm:mt-0 sm:max-w-screen-lg sm:pt-20"
          id="paperAreaTop"
          ref={areaWorkRef}
        >
          <div className="flex flex-col items-center">
            <h2 className="">-web-</h2>
            <h1 className="pb-8 capitalize leading-10">Store Site</h1>
          </div>
          <ul>
            {paperJobs.map((item: PaperJob, index: number) => (
              <div className="relative" key={item.id}>
                <ContentList
                  {...item}
                  style={
                    index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
                  }
                  isShowProps={isShow[item.id]}
                  handleDisplay={() => toggleVisibility(item.id)}
                />
                <ModalCard
                  {...item}
                  isShowProps={isShow[item.id]}
                  handleDisplay={() => toggleVisibility(item.id)}
                />
              </div>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
