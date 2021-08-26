interface ButtonOneProps {
  text: String;
  extraStyle?: String;
}

export const ButtonOne = ({ text, extraStyle }: ButtonOneProps) => (
  <div
    className={`bg-primary hover:bg-primaryHover text-white px-10 py-1 shadow ${extraStyle}`}
  >
    {text}
  </div>
);
