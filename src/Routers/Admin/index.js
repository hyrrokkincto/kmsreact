import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect, withRouter } from "react-router";
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const RegisterOrganization = React.lazy(() => import("../../pages/RegisterOrganization"));
const Analytics = React.lazy(() => import("../../pages/Analytics"));

const AdminRoute = () => {

    return (
        <>
            <Header />
            <div className='main-body-container'>
                <Sidebar />
                <div className='body-container'>
                    <Switch>
                        <Route exact path="/admin">
                            <Redirect to='/admin/register-organization' />
                        </Route>
                        <Route exact path="/admin/register-organization" component={RegisterOrganization} />
                        <Route exact path="/admin/analytics" component={Analytics} />
                    </Switch>
                </div>
            </div>
        </>
    );
}

export default withRouter(AdminRoute);
