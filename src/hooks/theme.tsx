/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createContext, useState, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dark from '../styles/themes/dark';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import light from '../styles/themes/light'

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

interface ITheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;

    }

}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
const themeSaved = localStorage.getItem('@carteira-online:theme');

if(themeSaved) {
    return JSON.parse(themeSaved);
}else{
    return dark;
}

    });


    const toggleTheme = () => {
        if (theme.title === 'dark') {
            setTheme(light);
            localStorage.setItem('@carteira-online:theme',JSON.stringify(light));
        } else {
            setTheme(dark);
            localStorage.setItem('@carteira-online:theme', JSON.stringify(dark));
        }
    };
    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    return context;
}


export {ThemeProvider, useTheme};

