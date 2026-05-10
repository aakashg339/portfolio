import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

function ThemeToggleButton() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    useEffect(() => {
        if(isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <>
            <button
                onClick={toggleTheme}
                className="fixed top-20 right-6 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all z-50 border border-slate-200 dark:border-slate-700"
            >
                {
                    isDark ? (
                        <LuSun className="w-6 h-6 text-yellow-500" />
                    ) : (
                        <LuMoon className="w-6 h-6 text-slate-700" />
                    )
                }
            </button>

        </>
    );
}

export default ThemeTogglebutton;