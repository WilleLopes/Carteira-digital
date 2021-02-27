import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter } from 'react-router-dom';
import App from './app.routes';

const Routes: React.FC = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

export default Routes;