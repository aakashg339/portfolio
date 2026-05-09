import { LuGraduationCap } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import SectionHeading from "../common/SectionHeading";

function Education() {
    return (
        <>
            <section id="education" className="px-6 py-16 bg-white transition-colors">
                <div className="max-w-6xl mx-auto">
                    {/* Section heading */}
                    <SectionHeading headingText={"Education"} />

                    {/* Details */}
                    <div className="space-y-6">
                        {/* Education Details */}
                        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                            <div className="flex flex-wrap items-start justify-between mb-2">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <LuGraduationCap className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-xl text-slate-900">
                                            Some Degree
                                        </h3>
                                        <p className="text-blue-600">
                                            Some University
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600 mt-2 md:mt-0">
                                    <CiCalendar className="w-4 h-4" />
                                    <span>2023-2024</span>
                                </div>
                            </div>
                            <p className="text-slate-700 ml-16">
                                Some Details
                            </p>
                        </div>

                        {/* Education Details */}
                        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
                            <div className="flex flex-wrap items-start justify-between mb-2">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-100 rounded-lg">
                                        <LuGraduationCap className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-xl text-slate-900">
                                            Some Degree 2
                                        </h3>
                                        <p className="text-purple-600">
                                            Some University 2
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600 mt-2 md:mt-0">
                                    <CiCalendar className="w-4 h-4" />
                                    <span>2023-2024</span>
                                </div>
                            </div>
                            <p className="text-slate-700 ml-16">
                                Some Details
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Education;