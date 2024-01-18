type Props = {
  children?: React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="w-32 rounded-full bg-[#FFCA99] px-8 py-1 text-center align-middle text-white"
  >
    {children}
  </button>
);

export default Button;
