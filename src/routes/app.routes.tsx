// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Dashboard from '../pages/Dashboard';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import List from '../pages/List';
import Layout from '../components/Layout';


const AppRoutes: React.FC = () => (

    <Layout>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/list/:type" exact component={List} />
        </Switch>
    </Layout>


);

export default AppRoutes;