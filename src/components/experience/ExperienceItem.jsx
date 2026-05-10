import { CiCalendar } from "react-icons/ci";

function ExperienceItem({ designation, companyName, yearFrom, yearTo, description }) {
    return (
        <>
            <div className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-90"></div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                        <div>
                            <h3 className="text-xl text-slate-900 dark:text-white">
                                {designation}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400">
                                {companyName}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <CiCalendar className="w-4 h-4" />
                            <span>{yearFrom}-{yearTo}</span>
                        </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default ExperienceItem;