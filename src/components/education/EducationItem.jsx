import { LuGraduationCap } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";

function EducationItem({ idx, degree, institute, yearFrom, yearTo, description }) {
    const colourVariants = [
        {
            border: "border-blue-600",
            bg: "bg-blue-100",
            text: "text-blue-600",
            darkBg: "bg-blue-900",
            darkText: "text-blue-400",

        },
        {
            border: "border-purple-600",
            bg: "bg-purple-100",
            text: "text-purple-600",
            darkBg: "bg-purple-900",
            darkText: "text-purple-400",
        },
        {
            border: "border-green-600",
            bg: "bg-green-100",
            text: "text-green-600",
            darkBg: "bg-green-900",
            darkText: "text-green-400",
        },
        {
            border: "border-orange-600",
            bg: "bg-orange-100",
            text: "text-orange-600",
            darkBg: "bg-orange-900",
            darkText: "text-orange-400",
        },
        {
            border: "border-teal-600",
            bg: "bg-teal-100",
            text: "text-teal-600",
            darkBg: "bg-teal-900",
            darkText: "text-teal-400",
        },
        {
            border: "border-rose-600",
            bg: "bg-rose-100",
            text: "text-rose-600",
            darkBg: "bg-rose-900",
            darkText: "text-rose-400",
        },
        {
            border: "border-amber-600",
            bg: "bg-amber-100",
            text: "text-amber-600",
            darkBg: "bg-amber-900",
            darkText: "text-amber-400",
        }
    ];

    const chosenColour = colourVariants[idx % colourVariants.length];
    
    return (
        <>
            <div className={`bg-slate-50 dark:bg-slate-700 p-6 rounded-lg border-l-4 ${chosenColour.border} hover:shadow-lg transition-shadow`}>
                <div className="flex flex-wrap items-start justify-between mb-2">
                    <div className="flex items-start gap-4">
                        <div className={`p-3 ${chosenColour.bg} dark:${chosenColour.darkBg} rounded-lg`}>
                            <LuGraduationCap className={`w-6 h-6 ${chosenColour.text} dark:${chosenColour.darkText}`} />
                        </div>
                        <div className="">
                            <h3 className="text-xl text-slate-900 dark:text-white">
                                {degree}
                            </h3>
                            <p className={`${chosenColour.text} dark:${chosenColour.darkText}`}>
                                {institute}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mt-2 md:mt-0">
                        <CiCalendar className="w-4 h-4" />
                        <span>{yearFrom}-{yearTo}</span>
                    </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 ml-16">
                    {description}
                </p>
            </div>
        </>
    );
}

export default EducationItem;