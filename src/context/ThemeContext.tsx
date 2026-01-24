import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type ThemeContextType = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');

        }
        localStorage.setItem('theme', isDarkMode);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider
            value={{ isDarkMode: isDarkMode === "dark", setIsDarkMode }}
        >
            {children}
        </ThemeContext.Provider>
    );

}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};