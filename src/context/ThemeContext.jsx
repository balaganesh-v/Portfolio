import { createContext, useContext, useEffect, useState } from "react";

// Create the context
const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // Load theme from localStorage on initial render
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle(
                "dark",
                storedTheme === "dark"
            );
        }
    }, []);

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);
