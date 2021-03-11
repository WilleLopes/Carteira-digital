import styled from 'styled-components';

interface IContainnerProps {
    color: string;
}

export const Container = styled.div<IContainnerProps>`
width: 32%;
height: 150px;

margin: 10px 0;

color: ${props => props.theme.colors.white};


background-color: ${props => props.color};

border-radius: 7px;
padding: 10px 20px;

position: relative;
overflow: hidden;

> img {
    height: 110%;

    position: absolute;
    top: -10px;
    right: -30px;

    opacity: .3;
}

> span {
    font-size: 18px;
    font-weight: 500;
}

> small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
}

@media(max-width: 780px){
    > span {
        font-size: 14px;
    }

    >h1 {
        word-wrap: break-word;
        font-size: 22px;

        > strong {
            display: inline-block;
            font-size: 16px;
            width: 100%;
        }
        
    }

}


@media(max-width: 420px){
    width: 100%;
    > h1{
        display: flex;

         strong {
        position: initial;
        
        width: auto;
        font-size: 22px;
    }
    strong:after{
        display:inline-block;
        width: 1px;
        content: '';
    }
  }
}

`;