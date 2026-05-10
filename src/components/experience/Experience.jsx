import portfolioConfig from "../../config/portfolioConfig";
import SectionHeading from "../common/SectionHeading";
import ExperienceItem from "./ExperienceItem";

function Experience() {
    const experienceSectionData = portfolioConfig.experience;
    
    const experiences = experienceSectionData.items;

    return (
        <>
            <section id="experience" className="px-6 py-16 bg-slate-50 dark:bg-slate-900 transition-colors scroll-mt-20" >
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <SectionHeading headingText={"Experience"} />

                    {/* Details */}
                    <div className="space-y-8 relative before:absolute before:left-1.75 before:top-0 before:h-full before:w-0.5 before:bg-blue-200 dark:before:bg-blue-900">
                        {/* Company Details */}
                        {
                            experiences.map((experience, idx) => (
                                <ExperienceItem key={experience.id} {...experience} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;