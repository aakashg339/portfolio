import SectionHeading from "../common/SectionHeading";

function Skills() {
    const skillsArr = ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7", "skill8"];

    return (
        <>
            <section id="skills" className="px-6 py-16 bg-slate-50 dark:bg-slate-900 transition-colors scroll-mt-20">
                <div className="max-w-6xl mx-auto">
                    {/* Section heading */}
                    <SectionHeading headingText={"Skills"} />

                    {/* Details */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {skillsArr.map((skill, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-50 dark:bg-slate-700 px-6 py-4 rounded-lg text-center border-2 border-transparent hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 dark:hover:border-blue-400 transition-all cursor-default"
                            >
                                <p className="text-slate-900 dark:text-white">
                                    {skill}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;