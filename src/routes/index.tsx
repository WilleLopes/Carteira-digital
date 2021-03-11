import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
 import App from './app.routes';
import Auth from './auth.routes';

const Routes: React.FC = () => {
    const { logged } = useAuth();
    
    return (
    <BrowserRouter>
       { logged ? <App/> : <Auth/> }
    </BrowserRouter>
    );
}

export default Routes;