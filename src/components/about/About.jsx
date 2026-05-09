import ParapraphList from "../common/ParapraphList";
import SectionHeading from "../common/SectionHeading";

function About() {
    const aboutMeParagraphs = ["More details about myself", "More details about myself", "More details about myself"];

    return (
        <>
            <section id="about" className="px-6 py-16 bg-white transition-colors">
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <SectionHeading headingText={"About Me"}  />

                    {/* Details */}
                    <div className="space-y-4 text-lg text-slate-700 leading-relaxed max-w-3xl">
                        <ParapraphList parapraphs={aboutMeParagraphs} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;