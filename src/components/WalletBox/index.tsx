/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from 'react';
import { Container } from './styles';
import CountUp from 'react-countup';
//instalei isso com yarn add react-countup 

import dollarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';


interface IWalletBoxProps {
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dollar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerlabel,
    icon,
    color,
}) => {

    const iconSelected = useMemo(() => {
        //    if(icon === 'dollar')
        //    return dollarImg;

        //    if(icon === 'arrowUp')
        //    return arrowUpImg;

        //    if(icon === 'arrowDown')
        //    return arrowDownImg;


        switch (icon) {
            case 'dollar':
                return dollarImg;
            case 'arrowUp':
                return arrowUpImg;
            case 'arrowDown':
                return arrowDownImg;
            // default:
            //     return undefined;            
        }









    }, [icon]);


    return (
        <Container
            color={color}
        >

            <span>{title}</span>
            <h1>
                <strong>R$ </strong>
                <CountUp
                    end={amount}
                    separator="."
                    decimal=","
                    decimals={2}
                />

            </h1>
            <small>{footerlabel}</small>
            <img src={iconSelected} alt={title} />

        </Container>
    );
}
export default WalletBox;