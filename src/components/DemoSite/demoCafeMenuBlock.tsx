import menus from "@/data/DemoSite/demoCafeMenuData";
import { MenuBlockProps } from "@/types/demoCafeTypes";

const MenuBlock: React.FC<MenuBlockProps> = ({ menuClassification }) => {
  const matchMenus = menus.filter(
    (menu) => menu.classification === menuClassification,
  );
  return (
    <div className="flex flex-col items-center">
      <h2 className="demoCafeStyleH2">{menuClassification}</h2>
      <ul className="flex w-80 flex-col">
        {matchMenus.map((item) => (
          <li key={item.id} className="relative">
            <p className="flex justify-between after:absolute after:top-1/2 after:-z-10 after:block after:h-0.5 after:w-full after:bg-[#FFCA99] after:content-['']">
              <span className="inline-block bg-white pr-1 text-[#614D3A]">
                {item.name}
              </span>
              <span className="inline-block bg-white pl-1 text-[#614D3A]">
                ¥{item.price}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBlock;
