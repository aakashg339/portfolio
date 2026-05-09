import { FaCode } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
    return (
        <>
            <section id="projects" className="px-6 py-16 bg-white transition-colors">
                <div className="max-w-6xl mx-auto">
                    {/* Section heading */}
                    <h2 className="text-3xl mb-12 text-slate-900 border-l-4 border-blue-600 pl-4">
                        Featured Projects
                    </h2>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Project details */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="h-48 bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                <FaCode className="w-16 h-16 text-white" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl mb-2 text-slate-900">
                                    Project 1
                                </h3>
                                <p className="text-slate-700 mb-4">
                                    Description of project
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                        framework1
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                        framework2
                                    </span>
                                </div>
                                <a 
                                    href="#"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                                >
                                    View Project <FiExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="h-48 bg-linear-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                <FaCode className="w-16 h-16 text-white" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl mb-2 text-slate-900">
                                    Project 1
                                </h3>
                                <p className="text-slate-700 mb-4">
                                    Description of project
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                        framework1
                                    </span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                        framework2
                                    </span>
                                </div>
                                <a 
                                    href="#"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                                >
                                    View Project <FiExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="h-48 bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center">
                                <FaCode className="w-16 h-16 text-white" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl mb-2 text-slate-900">
                                    Project 1
                                </h3>
                                <p className="text-slate-700 mb-4">
                                    Description of project
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                        framework1
                                    </span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                        framework2
                                    </span>
                                </div>
                                <a 
                                    href="#"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                                >
                                    View Project <FiExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;