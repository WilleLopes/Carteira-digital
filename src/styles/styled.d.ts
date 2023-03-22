import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
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

    },
  };
}

// isso cria uma tipagem para a aplicação de maneira global,
//  para ficar disponível para toda a aplicação
// nesse caso para utilizar o tema na aplicação basta usar o ThemeProvider do styled-components lá no App.tsx