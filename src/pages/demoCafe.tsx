/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MenuBlock from "@/components/DemoSite/demoCafeMenuBlock";
import navIcons from "@/data/DemoSite/demoCafeIconData";
import Icon from "@/components/DemoSite/demoCafeIconComponent";
import Button from "@/components/DemoSite/demoCafeButton";
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const mapAPIkey: string = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
const mapID: string = process.env.NEXT_PUBLIC_MAP_ID;
const logoIcon = navIcons.find((icon) => icon.text === "logo");

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

  const menuImageRef = useRef<HTMLDivElement>(null);
  const storyImageRef = useRef<HTMLDivElement>(null);
  const mapImageRef = useRef<HTMLDivElement>(null);
  const [menuImageHeight, setMenuImageHeight] = useState("h-[70vh]");
  const [storyImageHeight, setStoryImageHeight] = useState("h-[70vh]");
  const [mapImageHeight, setMapImageHeight] = useState("h-[70vh]");

  useEffect(() => {
    const imageInViewOptions = {
      rootMargin: "-20% 0% 10% 0%",
      threshold: Array.from({ length: 100 }, (_, index) => index / 100),
    };
    const observeElement = (
      elementRef: React.MutableRefObject<HTMLDivElement>,
      setHeight: React.Dispatch<React.SetStateAction<string>>,
    ) => {
      if (!elementRef.current) return undefined;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const isAboveRoot: boolean =
            entry.boundingClientRect.top <= entry.rootBounds!.top;
          const isBelowRoot: boolean =
            entry.boundingClientRect.bottom > entry.rootBounds!.bottom;
          if (isBelowRoot) {
            setHeight("h-[70vh]");
          } else if (isAboveRoot) {
            setHeight("h-[10vh]");
          } else {
            setHeight("h-[10vh]");
          }
        });
      }, imageInViewOptions);

      observer.observe(elementRef.current);

      return () => {
        observer.disconnect();
      };
    };
    observeElement(menuImageRef, setMenuImageHeight);
    observeElement(storyImageRef, setStoryImageHeight);
    observeElement(mapImageRef, setMapImageHeight);
  }, [menuImageRef, storyImageRef, mapImageRef]);

  const storyContentsDisplay: boolean[] = [false, false, false];
  const [displayShow, setDisplayShow] = useState(storyContentsDisplay);
  const handleClick = (index: number) => {
    const newDisplayShowState: boolean[] = [...displayShow];
    newDisplayShowState[index] = !newDisplayShowState[index];
    setDisplayShow(newDisplayShowState);
  };

  const position = { lat: 35.65720571170869, lng: 139.6677287383595 };
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShow, setInfoWindowShow] = useState(true);
  const toggleInfoWindow = () =>
    setInfoWindowShow((previousState) => !previousState);
  const closeInfoWindow = () => setInfoWindowShow(false);

  return (
    <>
      <header
        id="header"
        className="z-30 flex h-0 w-full items-center justify-center px-4 sm:fixed sm:h-16 sm:bg-white sm:px-4"
      >
        <div className="flex max-w-screen-lg justify-center sm:z-30 sm:h-fit sm:w-full sm:items-center">
          <h1 className="z-40 w-14 fill-[#FFCA99] text-[#FFCA99] opacity-0 sm:opacity-100">
            <Link href="/demoCafe/#areaTop" scroll={false}>
              <svg className="h-0 w-0 fill-[#FFCA99] sm:h-14 sm:w-14">
                <logoIcon.iconSvg />
              </svg>
            </Link>
          </h1>
          <nav className="fixed bottom-0 left-0 z-30 flex h-14 w-full max-w-5xl items-center justify-end bg-white sm:static sm:top-0 sm:bg-opacity-0">
            <ul
              className="flex h-10 w-full items-center justify-around sm:justify-end"
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
        <section id="areaTop" ref={areaTopRef}>
          <div className="mx-0 h-[100vh] sm:pt-16">
            <picture className="h-[100vh] w-[100vw]">
              <source
                className="h-full w-full object-cover"
                media="(max-width: 640px)"
                srcSet="/DemoSite/imgDemoCafeMainVisual_sm.webp 640w"
                width="640"
                height="1138"
              />
              <source
                className="h-full w-full object-cover"
                media="(max-width: 1920px)"
                srcSet="/DemoSite/imgDemoCafeMainVisual_xl.webp 1920w"
                width="1920"
                height="1080"
              />
              <img
                className="h-full w-full object-cover"
                src="/DemoSite/imgDemoCafeMainVisual_xl.jpg"
                alt="mainVisual"
                width="1920"
                height="1080"
                loading="lazy"
              />
            </picture>
            <div className="absolute bottom-20 flex h-auto w-full justify-center bg-[#FFCA99] bg-opacity-60 backdrop-blur-sm">
              <div className="flex h-fit w-full max-w-5xl flex-col items-end px-4">
                <svg className="h-24 w-24 fill-white drop-shadow-md">
                  <logoIcon.iconSvg />
                </svg>
                <h1 className="relative -top-4 z-10 mx-2 h-8 text-4xl text-white drop-shadow-md">
                  Demo Cafe
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section
          id="areaMenu"
          className="my-20 flex flex-col items-center sm:pt-16"
          ref={areaMenuRef}
        >
          <div
            className={`relative mb-4 transition-[height] ${menuImageHeight} w-full delay-100 duration-1000`}
            ref={menuImageRef}
          >
            <picture>
              <source
                className="absolute h-full w-full object-cover"
                media="(max-width: 640px)"
                srcSet="/DemoSite/imgDemoCafeMenu_sm.webp 640w"
                width="640"
                height="1138"
              />
              <source
                className="absolute h-full w-full object-cover"
                media="(max-width: 1920px)"
                srcSet="/DemoSite/imgDemoCafeMenu_xl.webp 1920w"
                width="1920"
                height="1280"
              />
              <img
                className="absolute h-full w-full object-cover"
                src="/DemoSite/imgDemoCafeMenu_xl.jpg"
                alt="menuImg"
                width="1280"
                height="1920"
                loading="lazy"
              />
            </picture>
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
          className="my-20 flex flex-col items-center sm:pt-16"
          ref={areaStoryRef}
        >
          <div
            className={`relative mb-4 transition-[height] ${storyImageHeight} w-full delay-100 duration-1000`}
            ref={storyImageRef}
          >
            <picture>
              <source
                className="absolute h-full w-full object-cover"
                media="(max-width: 640px)"
                srcSet="/DemoSite/imgDemoCafeStory_sm.webp 640w"
                width="640"
                height="420"
              />
              <source
                className="absolute h-full w-full object-cover"
                media="(max-width: 1920px)"
                srcSet="/DemoSite/imgDemoCafeStory_xl.webp 1920w"
                width="1920"
                height="1280"
              />
              <img
                className="absolute h-full w-full object-cover"
                src="/DemoSite/imgDemoCafeStory_xl.jpg"
                alt="storyImg"
                width="1920"
                height="1280"
                loading="lazy"
              />
            </picture>
            <h1 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 capitalize text-white">
              story
            </h1>
          </div>
          <div className="relative m-4 flex max-w-5xl flex-col items-center">
            <h2 className="demoCafeStyleH2">coffee</h2>
            <div
              key={0}
              className={
                displayShow[0]
                  ? "mb-10 max-h-[100vh] overflow-y-hidden transition-all duration-1000 ease-in after:opacity-0 after:transition-opacity after:duration-1000"
                  : "mb-4 max-h-[20vh] overflow-y-hidden transition-all duration-1000 ease-out after:absolute after:bottom-5 after:left-0 after:z-10 after:inline-block after:h-16 after:w-full after:bg-gradient-to-t after:from-white after:to-white/70 after:opacity-100 after:transition-opacity after:duration-1000 after:content-['']"
              }
            >
              <p className="text-justify indent-4 text-[#614D3A]">
                テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              </p>
              <p className="mt-2 text-justify indent-4 text-[#614D3A]">
                テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              </p>
            </div>
            <Button onClick={() => handleClick(0)}>
              {displayShow[0] ? "close" : "more"}
            </Button>
          </div>
        </section>
        <section
          id="areaMap"
          className="my-20 flex flex-col items-center sm:pt-16"
          ref={areaMapRef}
        >
          <div
            className={`relative mb-4 transition-[height] ${mapImageHeight} w-full delay-100 duration-1000`}
            ref={mapImageRef}
          >
            <picture>
              <source
                className="absolute h-full w-full object-cover"
                media="(max-width: 640px)"
                srcSet="/DemoSite/imgDemoCafeMap_sm.webp 640w"
                width="640"
                height="420"
              />
              <source
                className="absolute h-full w-full object-cover"
                media="(max-width: 1920px)"
                srcSet="/DemoSite/imgDemoCafeMap_xl copy.webp 1920w"
                width="1920"
                height="1280"
              />
              <img
                className="absolute h-full w-full object-cover"
                src="/DemoSite/imgDemoCafeMap_xl.jpg"
                alt="mapImg"
                width="1920"
                height="1280"
                loading="lazy"
              />
            </picture>
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
                <AdvancedMarker
                  ref={markerRef}
                  position={position}
                  onClick={toggleInfoWindow}
                />
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
          <address className="mb-4 flex flex-col items-start">
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
