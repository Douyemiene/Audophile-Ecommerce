module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        primaryHover: "#FBAF85",
        gray: "#F1F1F1",
      },
      backgroundImage: (theme) => ({
        "header-mobile":
          "linear-gradient(to bottom, rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url('/assets/home/mobile/image-header.jpg')",
        "header-tablet": "url('/assets/home/tablet/image-header.jpg')",
        "zx7-speaker": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        "header-desktop": "url('/assets/home/desktop/image-hero.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
