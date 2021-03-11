
import styled, { keyframes } from 'styled-components';

interface ILegendProps {
    color: string;
}


const animate = keyframes`

0% {
transform: translatex(-100px);
opacity: 0;
}
50%{

opacity: .3;
}
100%{

transform: translatex(0px);
opacity: 1;

}


`;




export const Container = styled.div`
width: 100%;
height: 400px;
flex-direction: column;

background-color: ${props => props.theme.colors.tertiary};
color: ${props => props.theme.colors.white};

margin: 10px 0;
padding: 30px 20px;

border-radius: 10px;

animation:${animate} 2.0s;

> h2 {
    margin-bottom: 20px;
    padding-left: 16px;


}
`;

export const ChartContainer = styled.div`
flex: 1;
height: 260px;
`;


export const Hell = styled.header`
width: 100%;

display: flex;
justify-content: space-between;


> h2 {
    margin-bottom: 20px;
    padding-left: 16px;
}


@media(max-width: 1270px){
    flex-direction: column;
}

@media(max-width: 300px){
    font-size: 15px;
}
        
        
    

`;


export const LegendContainer = styled.ul`

list-style: none;
display: flex;

@media(max-width: 300px){
     
       
     flex-direction: column;
     margin-top: -2px;

     
 
}


`;


export const Legend = styled.li<ILegendProps>`

display: flex;
align-items: center;

margin-bottom: 7px;
margin-left: 7px;
padding-right: 17px;


> div {
    background-color: ${props => props.color};

    width: 28px;
    height: 40px;
    border-radius: 5px;

    font-size: 18px;
    line-height: 40px;
    text-align: center;

}

> span {
    margin-left: 5px;
}


@media(max-width: 1270px){
    > div {
        width: 30px;
        height: 30px;
        margin-left: 12px;
    }
}



@media(max-width: 300px){
    > div {
        width: 30px;
        height: 15px;
        
        
        
        
        
        
    }
}

`;

