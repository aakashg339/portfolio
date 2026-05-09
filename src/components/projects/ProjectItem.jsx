import { FaCode } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import SpanList from "../common/SpanList";

function ProjectItem({ idx, name, description, tools, externalLink }) {
    const colourVariants = [
        {
            bgLinearToBrFrom: "from-blue-400",
            bgLinearToBrTo: "to-blue-600",
            techBg: "bg-blue-100",
            techText: "text-blue-700"
        },
        {
            bgLinearToBrFrom: "from-purple-400",
            bgLinearToBrTo: "to-purple-600",
            techBg: "bg-purple-100",
            techText: "text-purple-700"
        },
        {
            bgLinearToBrFrom: "from-green-400",
            bgLinearToBrTo: "to-green-600",
            techBg: "bg-green-100",
            techText: "text-green-700"
        },
        {
            bgLinearToBrFrom: "from-orange-400",
            bgLinearToBrTo: "to-orange-600",
            techBg: "bg-orange-100",
            techText: "text-orange-700"
        },
        {
            bgLinearToBrFrom: "from-teal-400",
            bgLinearToBrTo: "to-teal-600",
            techBg: "bg-teal-100",
            techText: "text-teal-700"
        },
        {
            bgLinearToBrFrom: "from-rose-400",
            bgLinearToBrTo: "to-rose-600",
            techBg: "bg-rose-100",
            techText: "text-rose-700"
        },
        {
            bgLinearToBrFrom: "from-amber-400",
            bgLinearToBrTo: "to-amber-600",
            techBg: "bg-amber-100",
            techText: "text-amber-700"
        }
    ]

    const chosenColour = colourVariants[idx % colourVariants.length];

    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`h-48 bg-linear-to-br ${chosenColour.bgLinearToBrFrom} ${chosenColour.bgLinearToBrTo} flex items-center justify-center`}>
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
                        {
                            <SpanList texts={tools} className={`px-3 py-1 ${chosenColour.techBg} ${chosenColour.techText} rounded-full text-sm`}  />
                        }
                    </div>
                    <a 
                        href={externalLink}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                        View Project <FiExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProjectItem;