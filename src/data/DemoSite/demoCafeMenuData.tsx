import { Menu } from "@/types/demoCafeTypes";

const menus: Menu[] = [
  {
    id: 0,
    name: "ブレンドコーヒー",
    price: 550,
    classification: "drink",
  },
  {
    id: 1,
    name: "カフェラテ",
    price: 650,
    classification: "drink",
  },
  {
    id: 2,
    name: "カプチーノ",
    price: 680,
    classification: "drink",
  },
  {
    id: 3,
    name: "アールグレイ（紅茶）",
    price: 600,
    classification: "drink",
  },
  {
    id: 4,
    name: "抹茶ラテ",
    price: 700,
    classification: "drink",
  },
  {
    id: 5,
    name: "バタートースト",
    price: 500,
    classification: "food",
  },
  {
    id: 6,
    name: "プレーンスコーン",
    price: 580,
    classification: "food",
  },
  {
    id: 7,
    name: "ガトーショコラ",
    price: 650,
    classification: "food",
  },
  {
    id: 8,
    name: "テイクアウトカップ",
    price: 800,
    classification: "other",
  },
  {
    id: 9,
    name: "ギフトセット（豆200g）",
    price: 1200,
    classification: "other",
  },
];

export default menus;
