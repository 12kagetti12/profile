/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MenuBlock from "@/components/DemoSite/demoCafeMenuBlock";
import navIcons from "@/data/DemoSite/demoCafeIconData";
import Icon from "@/components/DemoSite/demoCafeIconComponent";
import Button from "@/components/DemoSite/demoCafeButton";
import {
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const mapAPIkey: string = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
const mapID: string = process.env.NEXT_PUBLIC_MAP_ID;

export default function DemoCafe() {
  const useInViewOptions = { threshold: 0, rootMargin: "-20% 0px" };
  const { ref: areaTopRef, inView: InViewTop } = useInView(useInViewOptions);
  const { ref: areaMenuRef, inView: InViewMenu } = useInView(useInViewOptions);
  const { ref: areaStoryRef, inView: InViewStory } =
    useInView(useInViewOptions);
  const { ref: areaMapRef, inView: InViewMap } = useInView(useInViewOptions);
  const [iconState, setIconState] = useState([false, false, false, false]);
  useEffect(() => {
    const prevIconState = [InViewTop, InViewMenu, InViewStory, InViewMap];
    const lastTrueIndex = prevIconState.lastIndexOf(true);
    const updatedIconState = [false, false, false, false];
    updatedIconState[lastTrueIndex] = true;
    setIconState(updatedIconState);
  }, [InViewTop, InViewMenu, InViewStory, InViewMap]);

  const storyContentsDisplay: boolean[] = [false, false, false];
  const [displayShow, setDisplayShow] = useState(storyContentsDisplay);
  const handleClick = (index: number) => {
    const newDisplayShowState: boolean[] = [...displayShow];
    newDisplayShowState[index] = !newDisplayShowState[index];
    setDisplayShow(newDisplayShowState);
  };

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
              <img className="w-fit" src="#" alt="DemoCafeLogo" />
            </Link>
          </h1>
          <nav className="fixed bottom-0 z-30 flex h-16 w-full items-center bg-white">
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
                      className={
                        iconState[Number(icon.id) - 1]
                          ? "m-auto flex flex-col items-center justify-center text-[#FFCA99]"
                          : "m-auto flex flex-col items-center justify-center stroke-[#FFCA99] stroke-2 text-white"
                      }
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
        <section id="mainVisual" ref={areaTopRef}>
          <div className="mx-0 h-[100vh]">
            <img
              className="h-[100vh] w-auto object-cover"
              src="/DemoSite/imgDemoCafeHome.jpg"
              alt="mainVisual"
              width="1280"
              height="1920"
              loading="lazy"
            />
            <div className="absolute bottom-[12vh] flex w-full flex-col items-end bg-[#FFCA99] bg-opacity-60 px-4 backdrop-blur-sm">
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
        <section
          id="areaMenu"
          className="my-20 flex flex-col items-center"
          ref={areaMenuRef}
        >
          <div className="relative mb-4">
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
        <section
          id="areaStory"
          className="my-20 flex flex-col items-center"
          ref={areaStoryRef}
        >
          <div className="relative mb-4">
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
          <div className="relative m-4 flex flex-col items-center">
            <h2 className="demoCafeStyleH2">coffee</h2>
            <div
              key={0}
              className={
                displayShow[0]
                  ? "max-h-[100vh] overflow-y-hidden transition-[max-height] duration-1000 ease-in"
                  : "max-h-[10vh] overflow-y-hidden transition-[max-height] duration-1000 ease-out after:absolute after:bottom-0 after:left-0 after:z-10 after:inline-block after:h-4 after:w-full after:bg-white/70  after:content-['']"
              }
            >
              <p className="text-justify indent-4 text-[#614D3A]">
                テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              </p>
              <p className="mt-2 text-justify indent-4 text-[#614D3A]">
                テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              </p>
            </div>
          </div>
          <Button onClick={() => handleClick(0)}>
            {displayShow[0] ? "close" : "more"}
          </Button>
        </section>
        <section
          id="areaMap"
          className="my-20 flex flex-col items-center"
          ref={areaMapRef}
        >
          <div className="relative mb-4">
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
                      <Icon name="Menu" className="text-[#FFCA99]" />
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
                <img
                  src="/DemoSite/iconDemoCafeInstagram48px.png"
                  alt="InstagramIcon"
                  loading="lazy"
                  width="24"
                  height="24"
                />
              </dd>
            </dl>
          </address>
        </section>
      </main>
    </>
  );
}
