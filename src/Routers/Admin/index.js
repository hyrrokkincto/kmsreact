import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect, withRouter } from "react-router";
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

const RegisterOrganization = React.lazy(() => import("../../Screens/RegisterOrganization"));
const Analytics = React.lazy(() => import("../../Screens/Analytics"));

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
