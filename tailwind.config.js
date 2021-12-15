module.exports = {
  purge: ["./dist/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        "home-mobile": "url('assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('assets/home/background-home-desktop.jpg')",
      },
      boxShadow: {
        "xl-white": "0px 0px 0px 34px rgba(255,255,255,0.21)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
