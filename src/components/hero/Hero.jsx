import Container from "../../utils";
import heroImg from "../../img/heroImg.jpg";
import heroImg2 from "../../img/heroImg2.jpg";

const Hero = () => {
    return (
        <section id="home" className="section">
            <Container>
                <div className="flex flex-col md:grid md:grid-cols-2 items-center lg:gap-10">
                    <div className="flex flex-col items-start">
                        <div className="hero-top flex items-center gap-3">
                            <div className="avatar">
                                <div className="w-[44px] rounded-2xl overflow-hidden">
                                    <img
                                        src={heroImg}
                                        alt="Javokhir Bakhodirov"
                                        width={40}
                                        height={40}
                                        className="img-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                    <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                </span>
                                Available for work
                            </div>
                        </div>
                        <h2 className="h1 mt-5 mb-8 lg:mb-10 text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[20ch] leading-tight">
                            Bringing fresh ideas to life through clean and
                            responsive code.
                        </h2>
                    </div>
                    <div className="hidden md:flex justify-center lg:justify-end">
                        <figure className="img-cover max-w-full lg:max-w-[450px] mx-auto">
                            <img
                                src={heroImg2}
                                alt="Hero Image"
                                className="img-cover2 w-full h-auto"
                            />
                        </figure>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
