import SectionHeading from "../common/SectionHeading";

function About() {
    return (
        <>
            <section id="about" className="px-6 py-16 bg-white transition-colors">
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <SectionHeading headingText={"About Me"}  />

                    {/* Details */}
                    <div className="space-y-4 text-lg text-slate-700 leading-relaxed max-w-3xl">
                        <p className="">
                            More details about myself
                        </p>
                        <p className="">
                            More details about myself
                        </p>
                        <p className="">
                            More details about myself
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;