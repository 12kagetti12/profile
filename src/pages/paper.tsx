import Head from "next/head";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useRef, useEffect } from "react";
import PaperContentCard from "@/components/PaperContentCard";

type PaperJob = {
  id: number;
  occupation: string;
  media: string;
  imgSrc: string;
  text: string;
};

const paperJobs: PaperJob[] = [
  {
    id: 0,
    occupation: "DTP",
    media: "タイトルが入ります",
    imgSrc: "/content_paper.jpg",
    text: "仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事名",
  },
  {
    id: 1,
    occupation: "DTP",
    media: "paper",
    imgSrc: "/content_paper.jpg",
    text: "仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事",
  },
  {
    id: 2,
    occupation: "DTP",
    media: "paper",
    imgSrc: "/content_paper.jpg",
    text: "仕事仕事仕事仕事仕事仕事",
  },
  {
    id: 3,
    occupation: "DTP",
    media: "paper",
    imgSrc: "/content_paper.jpg",
    text: "仕事名",
  },
  {
    id: 4,
    occupation: "DTP",
    media: "paper",
    imgSrc: "/content_paper.jpg",
    text: "仕事仕事仕事仕事仕事仕事",
  },
  {
    id: 5,
    occupation: "DTP",
    media: "paper",
    imgSrc: "/content_paper.jpg",
    text: "仕事名",
  },
];

export default function Paper() {
  type refPositions = {
    topRefPosition: number;
    profileRefPosition: number;
    workRefPosition: number;
    contactRefPosition: number;
  };

  const [refPositions, setRefPositions] = useState({
    topRefPosition: null,
    profileRefPosition: null,
    workRefPosition: 1,
    contactRefPosition: null,
  });

  const areaTopRef = useRef(null);
  const areaProfileRef = useRef(null);
  const areaWorkRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const startingRef: number =
        areaWorkRef.current.getBoundingClientRect().top;
      const getAreaRefs = {
        topRefPosition: null,
        profileRefPosition: null,
        workRefPosition: startingRef,
        contactRefPosition: null,
      };
      setRefPositions(getAreaRefs);
    };
    window.addEventListener("load", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Paper</title>
      </Head>
      <Header refPositions={refPositions}></Header>
      <main>
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
            {paperJobs.map((item: PaperJob) => (
              <PaperContentCard
                key={item.id}
                imgSrc={item.imgSrc}
                media={item.media}
                text={item.text}
              />
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
