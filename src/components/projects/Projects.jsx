import { FaCode } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import ProjectItem from "./ProjectItem";

function Projects() {
    const projects = [
        {
            id: 1,
            name: "Some Name 1",
            description: "Some description 1", 
            tools: ["tech1", "tech2"], 
            externalLink: "#"
        },
        {
            id: 2,
            name: "Some Name 2",
            description: "Some description 2", 
            tools: ["tech1", "tech2"], 
            externalLink: "#"
        },
        {
            id: 3,
            name: "Some Name 3",
            description: "Some description 3", 
            tools: ["tech1", "tech2", "tech3", "tech4", "tech5", "tech6", "tech7"], 
            externalLink: "#"
        }
    ];

    return (
        <>
            <section id="projects" className="px-6 py-16 bg-white transition-colors">
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