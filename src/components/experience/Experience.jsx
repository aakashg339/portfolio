import { CiCalendar } from "react-icons/ci";

function Experience() {
    return (
        <>
            <section id="experience" className="px-6 py-16 bg-slate-50 transition-colors" >
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <h2 className="text-3xl mb-12 text-slate-900 border-l-4 border-blue-600 pl-4">
                        Experience
                    </h2>
                    {/* Details */}
                    <div className="space-y-8 relative before:absolute before:left-1.75 before:top-0 before:h-full before:w-0.5 before:bg-blue-200">
                        {/* Company Details */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex flex-wrap items-start justify-between mb-2">
                                    <div>
                                        <h3 className="text-xl text-slate-900">
                                            Software Engineer
                                        </h3>
                                        <p className="text-blue-600">
                                            Company Name
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <CiCalendar className="w-4 h-4" />
                                        <span>2023-2024</span>
                                    </div>
                                </div>
                                <p className="text-slate-700">
                                    Did something for the company
                                </p>
                            </div>
                        </div>

                        <div className="relative pl-8">
                            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex flex-wrap items-start justify-between mb-2">
                                    <div>
                                        <h3 className="text-xl text-slate-900">
                                            Software Engineer
                                        </h3>
                                        <p className="text-blue-600">
                                            Company Name 2
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <CiCalendar className="w-4 h-4" />
                                        <span>2023-2024</span>
                                    </div>
                                </div>
                                <p className="text-slate-700">
                                    Did something for the company
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;