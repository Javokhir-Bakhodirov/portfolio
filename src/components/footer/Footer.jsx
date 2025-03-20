import { BiChevronRight } from "react-icons/bi";
import React from "react";
import Container from "../../utils";

const sitemap = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "Reviews",
        href: "#reviews",
    },
    {
        label: "Contact me",
        href: "#contact",
    },
];

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/Javokhir-Bakhodirov",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/java3414_?igsh=MXMxdXZwaXo0M3NvZw==",
    },
];

const Footer = () => {
    return (
        <footer className='section'>
            <Container>
                <div className='lg:grid lg:grid-cols-2 '>
                    <div className='mb-10'>
                        <h2 className='h1 font-regular mb-8 lg:max-w-[18ch]'>Let's work together today!</h2>
                        <a
                            href='mailto:javokhir3414@icloud.com'
                            className='btn btn-primary  bg-sky-400 border-sky-400 hover:border-sky-300 hover:bg-sky-300 active:bg-sky-500 active:border-sky-500 '>
                            Start project{" "}
                            <span className=''>
                                <BiChevronRight className='text-xl' />
                            </span>
                        </a>
                    </div>

                    <div className='grid grid-cols-2 gap-4 lg:pl-20'>
                        <div className=''>
                            <p className='mb-4'>Sitemap</p>
                            <ul className=''>
                                {sitemap.map(({ label, href }, key) => (
                                    <li className='' key={key}>
                                        <a
                                            className='block text-sm text-zinc-500 py-1 transition-colors hover:text-zinc-200'
                                            href={href}>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className=''>
                            <p className='mb-4'>Socials</p>
                            <ul className=''>
                                {socials.map(({ label, href }, key) => (
                                    <li className='' key={key}>
                                        <a
                                            className='block text-sm text-zinc-500 py-1 transition-colors hover:text-zinc-200'
                                            target='_blank'
                                            href={href}>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
