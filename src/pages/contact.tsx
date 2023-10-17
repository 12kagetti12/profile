import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useRef, useEffect } from "react";

export default function Contact() {
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
    workRefPosition: null,
    contactRefPosition: 1,
  });

  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const startingRef: number =
        contactRef.current.getBoundingClientRect().top;
      const getAreaRefs = {
        topRefPosition: null,
        profileRefPosition: null,
        workRefPosition: null,
        contactRefPosition: startingRef,
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
        <title>Contact</title>
      </Head>
      <Header refPositions={refPositions}></Header>
      <main>
        <section
          className="pt-20 sm:mx-auto sm:max-w-screen-lg"
          id="areaTop"
          ref={contactRef}
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
