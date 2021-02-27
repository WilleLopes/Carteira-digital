// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
    Container,
    ToggleLabel,
    ToggleSelector,
} from '../../components/Toggle/styles';




interface IToggleProps {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}







// eslint-disable-next-line @typescript-eslint/no-unused-vars


const Toggle: React.FC<IToggleProps> = ({labelLeft, labelRight, 
    checked, 
    onChange}) => 
    // {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [online, setOnline] = useState(false);

    // return 
    (

    <Container>

       <ToggleLabel>{labelLeft}</ToggleLabel>

       <ToggleSelector
       checked={checked}
       uncheckedIcon={false}
       checkedIcon={false}
       onChange={onChange}

       />
       

       <ToggleLabel>{labelRight}</ToggleLabel>

    </Container>
    
    );
    

// }

export default Toggle;