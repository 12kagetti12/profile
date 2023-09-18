import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContentCard } from "@/components/ContentCard";

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
  return (
    <>
      <Head>
        <title>Sstoshi's Portfolio</title>
      </Head>
      <main id="areaTop">
        <Header />
        <div className="mx-0 sm:max-w-full">
          <Image
            className="h-screen object-cover sm:h-auto sm:max-w-full"
            src="/mainVisualSummer.jpg"
            alt="mainVisual"
            width={1920}
            height={1280}
            sizes="(max-width:640px) 100vh,(max-width:1200px) 100vh,100vh"
            priority={true}
          />
        </div>

        <section
          className="pt-20 sm:mx-auto sm:max-w-screen-lg"
          id="areaProfile"
        >
          <div className="mx-4 flex flex-col items-center">
            <h1 className="mb-6">Profile</h1>
            <div className="flex items-start justify-center">
              <Image
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

        <section className="pt-20 sm:mx-auto sm:max-w-screen-lg" id="areaWork">
          <div className="flex flex-col items-center">
            <h1 className="mx-4 mb-6">Work</h1>
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
