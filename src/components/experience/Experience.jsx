import SectionHeading from "../common/SectionHeading";
import ExperienceItem from "./ExperienceItem";

function Experience() {
    const experiences = [
        {
            designation: "Some Designaion", 
            companyName: "Some company", 
            yearFrom: "2023", 
            yearTo: "2024", 
            description: "Did something for the company"
        },
        {
            designation: "Some Designaion 2", 
            companyName: "Some company 2", 
            yearFrom: "2023", 
            yearTo: "2024", 
            description: "Did something for the company 2"
        }
    ];

    return (
        <>
            <section id="experience" className="px-6 py-16 bg-slate-50 transition-colors" >
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <SectionHeading headingText={"Experience"} />

                    {/* Details */}
                    <div className="space-y-8 relative before:absolute before:left-1.75 before:top-0 before:h-full before:w-0.5 before:bg-blue-200">
                        {/* Company Details */}
                        {
                            experiences.map((experience, idx) => (
                                <ExperienceItem {...experience} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;