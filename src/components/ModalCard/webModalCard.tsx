"use client";

/* eslint-disable @next/next/no-img-element */
import { ModalProps } from "@/types/portfolioTypes";
import Link from "next/link";

const WebModalCard: React.FC<ModalProps> = ({
  occupation,
  media,
  imgSrc,
  client,
  text,
  url,
  isShowProps,
  handleDisplay,
}) => (
  <>
    <div
      className={`${
        isShowProps
          ? "h-[100vh] w-[100vw] duration-500"
          : "h-0 w-0 delay-500 duration-1000"
      } fixed bottom-0 left-0 z-40 bg-black/50 backdrop-blur-sm`}
      onClick={handleDisplay}
    ></div>
    <div
      className={`${
        isShowProps
          ? "opacity-100 delay-500 duration-1000"
          : "translate-y-full opacity-0 duration-1000"
      } fixed left-1/2 top-1/2 z-50 w-[80vw] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white/95 p-8 shadow-lg backdrop-blur-sm sm:max-w-screen-sm`}
    >
      <h2 className="pb-2 leading-10">{media}</h2>
      <div className="flex h-fit max-h-[50vh] flex-col overflow-y-scroll sm:max-h-[60vh] sm:w-full sm:flex-row">
        <ul className="mb-2 h-full w-auto snap-mandatory sm:h-auto sm:w-1/2 sm:pr-4">
          <li className="whitespace-pre-wrap">{occupation}</li>
          <li className="whitespace-pre-wrap">{text}</li>
          <li className="whitespace-pre-wrap">Client：{client}</li>
          <li className="break-all">
            URL：
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all hover:text-gray-500"
            >
              {url}
            </Link>
          </li>
        </ul>
        <div className="aspect-auto h-full w-full sm:h-fit sm:w-1/2 sm:overflow-y-scroll">
          <img
            className="h-full w-full object-cover"
            src={imgSrc}
            alt={`${media}Img`}
          />
        </div>
      </div>
      <button onClick={handleDisplay} className="absolute right-3 top-3">
        <span className="roundButton"></span>
      </button>
    </div>
  </>
);

export default WebModalCard;
