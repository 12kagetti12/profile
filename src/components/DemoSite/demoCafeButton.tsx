import { ButtonProps } from "@/types/demoCafeTypes";

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="z-20 w-32 rounded-full bg-[#FFCA99] px-8 py-1 text-center align-middle text-white"
  >
    {children}
  </button>
);

export default Button;
