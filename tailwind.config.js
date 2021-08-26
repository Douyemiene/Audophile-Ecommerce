module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        primaryHover: "#FBAF85",
      },
      backgroundImage: (theme) => ({
        "header-mobile": "url('/assets/home/mobile/image-header.jpg')",
        "header-tablet": "url('/assets/home/tablet/image-header.jpg')",
        "header-desktop": "url('/assets/home/desktop/image-hero.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
