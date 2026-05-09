import { LuGraduationCap } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";

function EducationItem({ idx, degree, institute, yearFrom, yearTo, description }) {
    const colourVariants = [
        {
            border: "border-blue-600",
            bg: "bg-blue-100",
            text: "text-blue-600"
        },
        {
            border: "border-purple-600",
            bg: "bg-purple-100",
            text: "text-purple-600"
        },
        {
            border: "border-green-600",
            bg: "bg-green-100",
            text: "text-green-600"
        },
        {
            border: "border-orange-600",
            bg: "bg-orange-100",
            text: "text-orange-600"
        },
        {
            border: "border-teal-600",
            bg: "bg-teal-100",
            text: "text-teal-600"
        },
        {
            border: "border-rose-600",
            bg: "bg-rose-100",
            text: "text-rose-600"
        },
        {
            border: "border-amber-600",
            bg: "bg-amber-100",
            text: "text-amber-600"
        }
    ];

    const chosenColour = colourVariants[idx % colourVariants.length];
    
    return (
        <>
            <div className={`bg-slate-50 p-6 rounded-lg border-l-4 ${chosenColour.border} hover:shadow-lg transition-shadow`}>
                <div className="flex flex-wrap items-start justify-between mb-2">
                    <div className="flex items-start gap-4">
                        <div className={`p-3 ${chosenColour.bg} rounded-lg`}>
                            <LuGraduationCap className={`w-6 h-6 ${chosenColour.text}`} />
                        </div>
                        <div className="">
                            <h3 className="text-xl text-slate-900">
                                {degree}
                            </h3>
                            <p className={`${chosenColour.text}`}>
                                {institute}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 mt-2 md:mt-0">
                        <CiCalendar className="w-4 h-4" />
                        <span>{yearFrom}-{yearTo}</span>
                    </div>
                </div>
                <p className="text-slate-700 ml-16">
                    {description}
                </p>
            </div>
        </>
    );
}

export default EducationItem;