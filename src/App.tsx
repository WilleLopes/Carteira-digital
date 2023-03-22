/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { ThemeProvider } from 'styled-components';// ele usa o tema selecionado
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { useTheme } from './hooks/theme';



const App: React.FC = () => {
    const {theme} = useTheme();
    return (

        <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes/>
        </ThemeProvider>
       
    );
}

export default App;