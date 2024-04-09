import { JobProperties } from "@/types/portfolioTypes";

const portfolioJobs: JobProperties[] = [
  {
    id: 0,
    occupation: "Paper",
    media: "電機連合NAVI",
    imgSrc: "/paperContent_NAVI.jpg",
    client: "電機連合　様",
    text: "URL（2022.1.25時点）",
    url: "https://www.jeiu.or.jp/report/navi/2021/12000821.html",
  },
  {
    id: 1,
    occupation: "Paper",
    media: "経済情勢報告",
    imgSrc: "/paperContent01.jpg",
    client: "連合総研　様",
    text: "URL（2022.1.25時点）",
    url: "https://www.rengo-soken.or.jp/work/2021/10/260932.html",
  },
  {
    id: 2,
    occupation: "Paper",
    media: "経済情勢報告",
    imgSrc: "/paperContent02.jpg",
    client: "連合総研　様",
    text: "URL（2022.1.25時点）",
    url: "https://www.rengo-soken.or.jp/work/2019/10/281245.html",
  },
  {
    id: 3,
    occupation: "Paper",
    media: "名刺１",
    imgSrc: "/paperContent10.jpg",
    client: "Demo",
    text: "",
    url: "",
  },
  {
    id: 4,
    occupation: "Paper",
    media: "名刺２",
    imgSrc: "/paperContent09.jpg",
    client: "Demo",
    text: "",
    url: "",
  },
  {
    id: 5,
    occupation: "Paper",
    media: "名刺３",
    imgSrc: "/paperContent12.jpg",
    client: "Demo",
    text: "",
    url: "",
  },
  {
    id: 6,
    occupation: "WEB",
    media: "Demo Site Cafe",
    imgSrc: "/webThumbnailDemoCafe_md.webp",
    client: "Demo",
    text: `店の雰囲気が伝わるサイトの依頼を受けたと想定して作成しました。店内の様子、メニュー、お店のコンセプトや地図を掲載を想定しています。\n構築環境\nNext.js13、tailwind、typescript`,
    url: "/demoCafe",
  },
];

export default portfolioJobs;
