import SectionHeading from "../common/SectionHeading";
import EducationItem from "./EducationItem";

function Education() {
    const educationDetails = [
        {
            id: 1, 
            degree: "Some Degree", 
            institute: "Some institute", 
            yearFrom: "2023", 
            yearTo: "2025", 
            description: "Some description"
        },
        {
            id: 2, 
            degree: "Some Degree 2", 
            institute: "Some institute 2", 
            yearFrom: "2023", 
            yearTo: "2025", 
            description: "Some description 2"
        }
    ];

    return (
        <>
            <section id="education" className="px-6 py-16 bg-white transition-colors">
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