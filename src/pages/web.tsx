import Head from "next/head";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useRef, useEffect } from "react";

export default function Web() {
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
        <title>Web</title>
      </Head>
      <Header refPositions={refPositions}></Header>
      <main>
        <section
          className="pt-20 sm:mx-auto sm:max-w-screen-lg"
          id="webAreaTop"
          ref={areaWorkRef}
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
