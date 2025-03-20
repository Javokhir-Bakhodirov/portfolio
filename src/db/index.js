import nextjs from "../img/nextjs1.svg";
import css from "../img/css3.svg";
import figma from "../img/figma.svg";
import js from "../img/javascript.svg";
import tailwind from "../img/tailwindcss.svg";
import react from "../img/react.svg";
import antd from "../img/ant-design.svg";
import ts from "../img/typescript.svg";
import axios from "../img/image.png";
import evago from "../img/evago.jpg";
import pizza from "../img/pizza.jpg";
import eCommery from "../img/eComery.jpg";
import greenShop from "../img/greenShop.png";

export const skills = [
    {
        id: 1,
        label: "Figma",
        desc: "Design tool.",
        img: figma,
    },
    {
        id: 2,
        label: "Tailwind CSS",
        desc: "User Interface",
        img: tailwind,
    },
    {
        id: 3,
        label: "JavaScript",
        desc: "Interaction",
        img: js,
    },
    {
        id: 4,
        label: "TypeScript",
        desc: "Typed JavaScript.",
        img: ts,
    },
    {
        id: 5,
        label: "React",
        desc: "Framework",
        img: react,
    },
    {
        id: 6,
        label: "Redux",
        desc: "State management.",
        img: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    },
    {
        id: 7,
        label: "Ant Design",
        desc: "UI framework.",
        img: antd,
    },
    {
        id: 8,
        label: "CSS",
        desc: "User Interface",
        img: css,
    },
    {
        id: 9,
        label: "Axios",
        desc: "HTTP client.",
        img: axios,
    },
    {
        id: 10,
        label: "Next JS",
        desc: "Framework",
        img: nextjs,
    },
];

export const works = [
    {
        id: 1,
        imgSrc: evago,
        title: "Evolutionary fitness",
        tags: ["TypeScript", "JavaScript"],
        projectLink: "https://github.com/Javokhir-Bakhodirov/evogym",
    },
    {
        id: 2,
        imgSrc: pizza,
        title: "Pizza delivery",
        tags: ["TypeScript", "Redux"],
        projectLink: "https://github.com/Javokhir-Bakhodirov/react-pizza",
    },
    {
        id: 3,
        imgSrc: eCommery,
        title: "eCommerce website",
        tags: ["JavaScript", "Redux"],
        projectLink: "https://github.com/Javokhir-Bakhodirov/-tuff",
    },
    {
        id: 4,
        imgSrc: greenShop,
        title: "eCommerce website",
        tags: ["Next.js", "Tanstack Query"],
        projectLink: "https://github.com/Javokhir-Bakhodirov/GreenShop",
    },
];
