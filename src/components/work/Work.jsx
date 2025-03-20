import React from "react";
import Container from "../../utils";
import { works } from "../../db";
import ProjectCard from "../projectCard/ProjectCard";

const Work = () => {
    return (
        <section id='work' className='section'>
            <Container>
                <h2 className='text-left h21  text-3xl lg:text-4xl lg:leading-tight font-medium  mb-4'>
                    My portfolio highlights
                </h2>
                <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(340px,_1fr))]'>
                    {works.map(({ id, imgSrc, title, tags, projectLink }) => {
                        return (
                            <ProjectCard
                                key={id}
                                title={title}
                                tags={tags}
                                projectLink={projectLink}
                                imgSrc={imgSrc}
                            />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Work;
