const root = [
  "./index.html",
  "./src/**/*.{ts,tsx}",
  "./public/images/**/*.svg",
];

module.exports = {
  content: root,
  theme: {
    extend: {
      boxShadow: {
        // right: "20px 0 60px -15px rgba(0, 0, 0, 0.3)",
        cartButton: "hsl(26, 100%, 55%,0.4) 0px 15px 50px 0px;",
      },
      gridTemplateColumns: {
        quantityButton: "1fr 1fr 1fr",
      },
      colors: {
        customOrange: "hsl(26, 100%, 35%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "light-grayish": "hsl(223, 64%, 98%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
      },
    },
  },
  plugins: [],
};
