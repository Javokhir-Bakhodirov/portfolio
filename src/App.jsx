import React from "react";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Hero from "./components/hero/Hero";
import Skill from "./components/skills/Skill";
import Work from "./components/work/Work";
import ContactMe from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <ContactMe />
            </main>
            <Footer />
        </>
    );
};

export default App;
