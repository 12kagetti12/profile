import Link from "next/link";
import MenuBlock from "@/components/DemoSite/demoCafeMenuBlock";
import navIcons from "@/data/DemoSite/demoCafeIconData";
import Button from "@/components/DemoSite/demoCafeButton";
import {
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

const mapAPIkey: string = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
const mapID: string = process.env.NEXT_PUBLIC_MAP_ID;

export default function DemoCafe() {
  const position = { lat: 35.65720571170869, lng: 139.6677287383595 };
  const [markerRef, marker] = useMarkerRef();
  const [infoWindowShow, setInfoWindowShow] = useState(true);
  const toggleInfoWindow = () =>
    setInfoWindowShow((previousState) => !previousState);
  const closeInfoWindow = () => setInfoWindowShow(false);
  return (
    <>
      <header id="areaTop">
        <div>
          <h1 className="hidden">
            <Link href="/demoCafe" scroll={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-fit" src="#" alt="DemoCafeLogo" />
            </Link>
          </h1>
          <nav className="fixed bottom-0 z-30 flex h-[10vh] w-full items-center bg-white">
            <ul
              className="flex w-full items-center justify-around"
              id="scroll_nav"
            >
              {navIcons.map((icon) =>
                icon.applicableSections.includes("headerNav") ? (
                  <li
                    key={icon.id}
                    className={
                      icon.text === "logo"
                        ? "relative px-4 sm:hidden"
                        : "relative px-4"
                    }
                  >
                    <Link
                      className="m-auto flex flex-col items-center justify-center fill-current"
                      href={icon.hrefSection}
                      scroll={false}
                    >
                      <icon.iconSvg />
                      <p className="relative -top-1 h-2 text-xs capitalize text-[#FFCA99]">
                        {icon.text}
                      </p>
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="mainVisual">
          <div className="mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-[100vh] w-auto object-cover"
              src="/DemoSite/imgDemoCafeMainVisual.jpg"
              alt="mainVisual"
              width="1440"
              height="1920"
              loading="lazy"
            />
            <div className="absolute bottom-[12vh] flex w-full flex-col items-end bg-[#FFCA99] bg-opacity-60 px-4 backdrop-blur-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="fill-current drop-shadow-md"
                src="/DemoSite/iconDemoCafeLogo96px.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <h1 className="relative -top-4 z-10 mx-2 h-8 text-4xl text-white drop-shadow-md">
                Demo Cafe
              </h1>
            </div>
          </div>
        </section>
        <section id="areaMenu" className="my-20 flex flex-col items-center">
          <div className="relative mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/DemoSite/imgDemoCafeMenu.jpg"
              alt="menuImg"
              width="1280"
              height="1920"
              loading="lazy"
            />
            <h1 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-white">
              Menu
            </h1>
          </div>
          <MenuBlock menuClassification="drink" />
          <MenuBlock menuClassification="food" />
          <MenuBlock menuClassification="other" />
        </section>
        <section id="areaStory" className="my-20 flex flex-col items-center">
          <div className="relative mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/DemoSite/imgDemoCafeStory.jpg"
              alt="storyImg"
              width="1920"
              height="1280"
              loading="lazy"
            />
            <h1 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 capitalize text-white">
              story
            </h1>
          </div>
          <div className="m-4 flex flex-col items-center">
            <h2 className="demoCafeStyleH2">coffee</h2>
            <p className="text-justify indent-4 text-[#614D3A]">
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
            </p>
            <p className="mt-2 text-justify indent-4 text-[#614D3A]">
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
            </p>
          </div>
          <Button onClick={() => console.log("Hello world")}>more</Button>
        </section>
        <section id="areaMap" className="my-20 flex flex-col items-center">
          <div className="relative mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/DemoSite/imgDemoCafeMap.jpg"
              alt="mapImg"
              width="1920"
              height="1280"
              loading="lazy"
            />
            <h1 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-white">
              Map
            </h1>
          </div>
          <div className="mb-4 h-[50vh] w-[80vw]">
            <APIProvider apiKey={mapAPIkey}>
              <Map
                center={position}
                zoom={14}
                mapId={mapID}
                fullscreenControl={false}
                mapTypeControl={false}
                streetViewControl={false}
              >
                <Marker
                  ref={markerRef}
                  position={position}
                  onClick={toggleInfoWindow}
                ></Marker>
                {infoWindowShow && (
                  <InfoWindow anchor={marker} onCloseClick={closeInfoWindow}>
                    <div className="flex flex-col items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/DemoSite/iconDemoCafeMenu48px.svg"
                        alt="demoCafeLogo"
                        loading="lazy"
                      />
                      <h2 className="align-text-top text-2xl text-[#FFCA99]">
                        Demo Cafe
                      </h2>
                      <p>0:00am to 0:00pm</p>
                    </div>
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>
          </div>
          <address className="flex flex-col items-start">
            <dl className="flex text-left">
              <dt className="w-20 text-[#FFCA99]">address</dt>
              <dd className="max-w-[50vw] break-words text-[#614D3A]">
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </dd>
            </dl>
            <dl className="flex text-left">
              <dt className="w-20 text-[#FFCA99]">open</dt>
              <dd className="text-[#614D3A]">0:00am to 0:00pm</dd>
            </dl>
            <dl className="flex text-left">
              <dt className="w-20 text-[#FFCA99]">SNS</dt>
              <dd>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/DemoSite/iconDemoCafeInstagram48px.png"
                  alt="InstagramIcon"
                  loading="lazy"
                ></img>
              </dd>
            </dl>
          </address>
        </section>
      </main>
    </>
  );
}
