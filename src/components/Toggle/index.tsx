import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
    Container,
    ToggleLabel,
    ToggleSelector,
} from '../../components/Toggle/styles';


// eslint-disable-next-line @typescript-eslint/no-unused-vars


const Toggle: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [online, setOnline] = useState(false);

    return (

    <Container>

       <ToggleLabel>Light</ToggleLabel>

       <ToggleSelector
       checked={online}
       uncheckedIcon={false}
       checkedIcon={false}
       onChange={() => setOnline(!online)}

       />
       

       <ToggleLabel>Dark</ToggleLabel>

    </Container>
    
    );
    

}

export default Toggle;