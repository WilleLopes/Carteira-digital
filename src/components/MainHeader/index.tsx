/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo} from 'react';
import Toggle from '../Toggle';
import emojis from '../../Utils/emojis';
import { Container, 
         Profile, 
         Welcome, 
         UserName, } from './styles';

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length );
        return emojis[indice];

    },[]);


    return (
        <Container>
           <Toggle />
           <Profile>
               <Welcome>Olá, {emoji} </Welcome>
               <UserName>Wille Lopes</UserName>
           </Profile>
        </Container>
    );
}
export default MainHeader;