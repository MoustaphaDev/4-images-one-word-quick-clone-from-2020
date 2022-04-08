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
        "letter-case": "0px 0px 14px #ffffffaa",
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
