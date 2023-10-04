import Head from "next/head";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useRef, useEffect } from "react";
import { PaperContentCard } from "@/components/PaperContentCard";

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
    media: "paper",
    imgSrc: "string",
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
          className="pt-20 sm:mx-auto sm:max-w-screen-lg"
          id="paperAreaTop"
          ref={areaWorkRef}
        >
          <div className="flex flex-col items-center">
            <h1>公開準備中</h1>
          </div>
        </section>
        <section>
          <h1>Paper-print-</h1>
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
