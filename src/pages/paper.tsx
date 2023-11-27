import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useRef, useCallback } from "react";
import ModalCard from "@/components/ModalCard";
import DetailsCard from "@/components/DetailsCard";
import useIntersectionObserver from "@/hocks/useHandleIsShow";

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
    occupation: "DTP",
    media: "電機連合NAVI",
    imgSrc: "/paperContent_NAVI.jpg",
    client: "電機連合",
    text: "URL（2022.1.25時点）",
    url: "https://www.jeiu.or.jp/report/navi/2021/12000821.html",
  },
  {
    id: 1,
    occupation: "DTP",
    media: "Paper",
    imgSrc: "/paperContent01.jpg",
    client: "###",
    text: "仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事",
    url: "",
  },
  {
    id: 2,
    occupation: "DTP",
    media: "Paper",
    imgSrc: "/paperContent02.jpg",
    client: "###",
    text: "仕事仕事仕事仕事仕事仕事",
    url: "",
  },
  {
    id: 3,
    occupation: "DTP",
    media: "Paper",
    imgSrc: "/paperContent10.jpg",
    client: "###",
    text: "仕事名",
    url: "",
  },
  {
    id: 4,
    occupation: "DTP",
    media: "Paper",
    imgSrc: "/paperContent09.jpg",
    client: "###",
    text: "仕事仕事仕事仕事仕事仕事",
    url: "",
  },
  {
    id: 5,
    occupation: "DTP",
    media: "Paper",
    imgSrc: "/paperContent12.jpg",
    client: "###",
    text: "仕事名",
    url: "",
  },
];

export default function Paper() {
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
    setIsShow((prevIsShow: []) => {
      const newIsShow = {
        ...prevIsShow,
        [id]: !prevIsShow[id],
      };
      return newIsShow;
    });
  }, []);

  return (
    <>
      <Head>
        <title>Paper</title>
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
            <h2 className="">-print-</h2>
            <h1 className="pb-8 capitalize leading-10">Paper</h1>
          </div>
          <ul>
            {paperJobs.map((item: PaperJob, index: number) => (
              <div className="relative" key={item.id}>
                <ModalCard
                  {...item}
                  style={
                    index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
                  }
                  isShowProps={isShow[item.id]}
                  handleDisplay={() => toggleVisibility(item.id)}
                />
                <DetailsCard
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
