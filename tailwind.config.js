import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["dark"],
        darkTheme: "dark",
    },
    plugins: [require("daisyui"), tailwindScrollbar],
};
