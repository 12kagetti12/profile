import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useRef, useEffect } from "react";
import PaperContentCard from "@/components/PaperContentCard";
import DetailsCard from "@/components/DetailsCard";

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
    text: "仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事仕事",
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
  // eslint-disable-next-line @typescript-eslint/naming-convention
  type refPositions = {
    topRefPosition: number;
    profileRefPosition: number;
    workRefPosition: number;
    contactRefPosition: number;
  };

  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const [refPositions, setRefPositions] = useState({
    topRefPosition: null,
    profileRefPosition: null,
    workRefPosition: 1,
    contactRefPosition: null,
  });

  const areaWorkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const startingRef: number =
        areaWorkRef.current.getBoundingClientRect().top;
      const getAreaRefs = {
        topRefPosition: null,
        profileRefPosition: null,
        workRefPosition: startingRef + 1,
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
            {paperJobs.map((item: PaperJob, index: number) => (
              <div key={item.id}>
                <PaperContentCard
                  imgSrc={item.imgSrc}
                  client={item.client}
                  media={item.media}
                  text={item.text}
                  url={item.url}
                  style={
                    index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
                  }
                />
                <DetailsCard {...item} />
              </div>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
