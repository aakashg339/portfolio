import portfolioConfig from "../../config/portfolioConfig";
import ParapraphList from "../common/ParapraphList";
import SectionHeading from "../common/SectionHeading";

function About() {
    const aboutMeSectionData = portfolioConfig.about;

    return (
        <>
            <section id="about" className="px-6 py-16 bg-white dark:bg-slate-800 transition-colors scroll-mt-20">
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <SectionHeading headingText={"About Me"}  />

                    {/* Details */}
                    <div className="space-y-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
                        <ParapraphList parapraphs={aboutMeSectionData.paragraphs} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;