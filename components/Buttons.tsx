type ButtonOneProps = {
  text: string;
  extraStyle?: string;
  inverted?: boolean;
  onClick?: VoidFunction;
};

const clickHolder = (onclick?: VoidFunction) => {
  if (onclick) {
    onclick();
  }
};

export const Button = ({ text, extraStyle, onClick }: ButtonOneProps) => (
  <div
    onClick={() => clickHolder(onClick)}
    className={`${extraStyle} text-black px-10 py-1 shadow `}
  >
    {text}
  </div>
);

export const ButtonOne = ({ text, extraStyle, onClick }: ButtonOneProps) => (
  <div
    onClick={() => clickHolder(onClick)}
    className={`${extraStyle} bg-primary hover:bg-primaryHover text-white px-10 py-1 shadow `}
  >
    {text}
  </div>
);

export const ButtonTwo = ({
  text,
  extraStyle,
  inverted,
  onClick,
}: ButtonOneProps) => {
  let colors = "bg-black text-white  hover:bg-white hover:text-black";
  if (inverted) {
    colors =
      "bg-gray border-2 border-black text-black hover:bg-black hover:text-white ";
  }

  return (
    <div
      onClick={() => clickHolder(onClick)}
      className={`${colors} ${extraStyle}  font-semibold px-8 py-1 shadow `}
    >
      {text}
    </div>
  );
};
