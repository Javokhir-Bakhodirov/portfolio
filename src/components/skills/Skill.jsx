import { skills } from "../../db";
import Container from "../../utils";

const Skill = () => {
    return (
        <section id="skill" className="section">
            <Container>
                <div className="">
                    <h2 className="text-left h21  text-3xl lg:text-4xl lg:leading-tight font-medium  mb-4">
                        Essential Tools I use
                    </h2>
                    <p className="mt-3 mb-8 max-w-[75ch] text-zinc-400">
                        Explore the cutting-edge tools and technologies I
                        leverage to build dynamic, high-performing websites and
                        applications. With a solid foundation in frontend
                        development, I consistently deliver responsive,
                        user-friendly digital solutions.
                    </p>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {skills.map(({ id, label, desc, img }) => (
                            <div
                                key={id}
                                className="flex transition-all group items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3  hover:bg-zinc-700">
                                <figure className="w-12 h-12 bg-zinc-700/50 rounded-lg overflow-hidden p-2  group-hover:bg-zinc-800">
                                    <img
                                        src={img}
                                        alt={label}
                                        width={32}
                                        height={32}
                                    />
                                </figure>
                                <div>
                                    <h3 className="text-zinc-50">{label}</h3>
                                    <p className="text-zinc-400 text-sm">
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Skill;
