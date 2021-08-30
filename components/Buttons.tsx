type ButtonOneProps = {
  text: string;
  extraStyle?: string;
  inverted?: boolean;
};

export const Button = ({ text, extraStyle }: ButtonOneProps) => (
  <div className={`${extraStyle} text-white px-10 py-1 shadow `}>{text}</div>
);

export const ButtonOne = ({ text, extraStyle }: ButtonOneProps) => (
  <div
    className={`${extraStyle} bg-primary hover:bg-primaryHover text-white px-10 py-1 shadow `}
  >
    {text}
  </div>
);

export const ButtonTwo = ({ text, extraStyle, inverted }: ButtonOneProps) => {
  let colors = "bg-black text-white  hover:bg-white hover:text-black";
  if (inverted) {
    colors =
      "bg-gray border-2 border-black text-black hover:bg-black hover:text-white ";
  }

  return (
    <div
      className={`${colors} ${extraStyle}  font-semibold px-10 py-1 shadow `}
    >
      {text}
    </div>
  );
};
