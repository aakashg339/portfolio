import portfolioConfig from "../../config/portfolioConfig";
import SectionHeading from "../common/SectionHeading";
import EducationItem from "./EducationItem";

function Education() {
    const educationSectionData = portfolioConfig.education;
    
    const educationDetails = educationSectionData.items;

    return (
        <>
            <section id="education" className="px-6 py-16 bg-white dark:bg-slate-800 transition-colors scroll-mt-20">
                <div className="max-w-6xl mx-auto">
                    {/* Section heading */}
                    <SectionHeading headingText={"Education"} />

                    {/* Details */}
                    <div className="space-y-6">
                        {/* Education Details */}
                        {
                            educationDetails.map((education, idx) => (
                                <EducationItem 
                                    key={education.id} 
                                    {...education}
                                    idx={idx}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Education;