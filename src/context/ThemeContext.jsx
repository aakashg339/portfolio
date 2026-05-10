import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
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
            <ThemeContext
                value={{
                    isDark,
                    toggleTheme
                }}
            >
                {children}
            </ThemeContext>
        </>
    );
}

function useTheme() {
    return useContext(ThemeContext);
}

export {ThemeProvider, useTheme};