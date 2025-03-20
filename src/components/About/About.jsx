import React from "react";
import Container from "../../utils";

const About = () => {
    return (
        <section id="about" className="section py-12">
            <Container>
                <div className="about-wrapper flex justify-center items-center">
                    <div className=" bg-zinc-800/40 w-full p-6 rounded-lg shadow-lg md:p-10 ">
                        <p className=" text-center text-zinc-400 text-lg leading-relaxed">
                            A young and motivated frontend developer with recent
                            completion of a frontend development course. I have
                            strong skills in modern technologies such as HTML,
                            CSS, JavaScript, React, and Tailwind CSS. I am
                            committed to continuous professional growth and
                            ready to apply my knowledge in practice. I have
                            experience working in teams and possess a strong
                            ability to learn quickly.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
