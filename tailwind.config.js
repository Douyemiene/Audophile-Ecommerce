module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class',
  important: true,
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        primary: "#D87D4A",
        primaryHover: "#FBAF85",
        mygray: "#F1F1F1",
        projectBlack: "#191919",
        homeTopGray: "#979797",
      },
      backgroundImage: (theme) => ({
        "no-header": " url('/')",
        "header-mobile":
          "linear-gradient(to bottom, rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url('/assets/home/mobile/image-header.jpg')",
        "header-tablet":
          "linear-gradient(to bottom, rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url('/assets/home/tablet/image-header.jpg')",
        "zx7-speaker": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        "zx7-speaker-t": "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        "zx7-speaker-d": "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        "header-desktop":
          "linear-gradient(to bottom, rgba(0,0,0,0.6),rgba(0,0,0,0.3)), url('/assets/home/desktop/image-hero.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
