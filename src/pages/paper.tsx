import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useRef, useCallback, useEffect } from "react";
import useIntersectionObserver from "@/hocks/useHandleIsShow";
import dynamic from "next/dynamic";
import PaperContentList from "@/components/ContentList/paperContentList";
import { JobProperties } from "@/types/portfolioTypes";
import portfolioJobs from "@/data/portfolioData";

const PaperModalCard = dynamic(
  () => import("@/components/ModalCard/paperModalCard"),
  { ssr: false },
);

const paperJobs: JobProperties[] = portfolioJobs.filter(
  (jobProperty: JobProperties) => jobProperty.occupation === "Paper",
);

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
            {paperJobs.map((item: JobProperties, index: number) => (
              <div className="relative" key={item.id}>
                <PaperContentList
                  {...item}
                  style={
                    index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
                  }
                  isShowProps={isShow[item.id]}
                  handleDisplay={() => toggleVisibility(item.id)}
                />
                <PaperModalCard
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
