type ButtonOneProps = {
  text: string;
  extraStyle?: string;
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

export const ButtonTwo = ({ text, extraStyle }: ButtonOneProps) => (
  <div
    className={`${extraStyle} bg-black text-white  hover:bg-white hover:text-black hover-fontsemibold px-10 py-1 shadow `}
  >
    {text}
  </div>
);
