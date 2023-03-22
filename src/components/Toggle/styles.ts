import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
display: flex;
align-items: center;
`;

export const ToggleLabel = styled.span`
color: ${props => props.theme.colors.white};
`;

// quando já é um componente com uma biblioteca pronta utiliza-se o parenteses 
// logo após o styled, e se você quiser alterar qualquer atributo desse componente 
// basta usar o attrs, colocando até as propps desse compoenjte
// depois basta estilizar de maneira padrão o restante do styled.
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor:theme.colors.info,
        offColor:theme.colors.warning,
    })
)<ReactSwitchProps>`
margin: 0 7px;

`;