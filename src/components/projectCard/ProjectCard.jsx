import { CgArrowTopRight } from "react-icons/cg";
import { BsArrowUpRight } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, imgSrc, tags, projectLink }) => {
    return (
        <div
            className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors`}>
            <figure className='img-box rounded-lg mb-4'>
                <img src={imgSrc} alt={title} className=' rounded-lg' loading='lazy' />
            </figure>
            <div className=''>
                <h3 className='title-1 mb-3'>{title}</h3>
                <div className='flex items-center justify-between'>
                    <div className=' flex flex-wrap items-center gap-2'>
                        {tags.map((tag, key) => {
                            return (
                                <span
                                    key={key}
                                    className=' h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg'>
                                    {tag}
                                </span>
                            );
                        })}
                    </div>
                    <span className='h-8 w-8 rounded-lg grid place-items-center bg-sky-400 shrink-0 text-zinc-950'>
                        <CgArrowTopRight className='text-2xl' />
                    </span>
                    <Link to={projectLink} className='absolute inset-0'></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
