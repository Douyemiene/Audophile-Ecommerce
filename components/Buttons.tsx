type ButtonOneProps = {
  text: string;
  extraStyle?: string;
};

export const ButtonOne = ({ text, extraStyle }: ButtonOneProps) => (
  <div
    className={`${extraStyle} bg-primary hover:bg-primaryHover text-white px-10 py-1 shadow `}
  >
    {text}
  </div>
);
