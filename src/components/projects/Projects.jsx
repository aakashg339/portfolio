import { FaCode } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import ProjectItem from "./ProjectItem";
import portfolioConfig from "../../config/portfolioConfig";

function Projects() {
    const projectsSectionData = portfolioConfig.projects;

    const projects = projectsSectionData.projects;

    return (
        <>
            <section id="projects" className="px-6 py-16 bg-white dark:bg-slate-800 transition-colors scroll-mt-20">
                <div className="max-w-6xl mx-auto">
                    {/* Section heading */}
                    <SectionHeading headingText={"Featured Projects"} />

                    {/* Details */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Project details */}
                        {
                            projects.map((project, idx) => (
                                <ProjectItem 
                                    key={project.id}
                                    {...project}
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

export default Projects;