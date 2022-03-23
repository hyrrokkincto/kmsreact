import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect, withRouter } from "react-router";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";   
const RegisterOrganization = React.lazy(() => import("../../pages/RegisterOrganization"));
const Analytics = React.lazy(() => import("../../pages/Analytics"));
const RolesComponent = React.lazy(() => import("../../pages/RolesComponent"));
const AuditComponent = React.lazy(() => import("../../pages/AuditComponent"));
const GroupComponent = React.lazy(() => import("../../pages/GroupComponent"));
const ServiceRequest = React.lazy(() => import("../../pages/ServiceRequest"));
const EndPoints = React.lazy(() => import("../../pages/EndPoints"));
const Organizations = React.lazy(() => import("../../pages/Organizations"));
const Invoice = React.lazy(() => import("../../pages/Invoice"));
const SalesAnalytics = React.lazy(() => import("../../pages/SalesAnalytics"));
const ControlCenter = React.lazy(() => import("../../pages/ControlCenter"));  
const AdminRoute = () => {
  return (
    <>
      <Header />
      <div className="main-body-container">
        <Sidebar />
        <div className="body-container page_content p-0">
          <Switch>
            <Route exact path="/admin">
              <Redirect to="/admin/register-organization" />
            </Route>
            <Route
              exact
              path="/admin/register-organization"
              component={RegisterOrganization}
            />
            <Route exact path="/admin/analytics" component={Analytics} />
            <Route exact path="/admin/audit" component={AuditComponent} />
            <Route exact path="/admin/roles" component={RolesComponent} />
            <Route exact path="/admin/group" component={GroupComponent} />
            <Route exact path="/admin/service-request" component={ServiceRequest} />
            <Route exact path="/admin/end-points" component={EndPoints} />
            <Route exact path="/admin/organizations" component={Organizations} />
            <Route exact path="/admin/invoice" component={Invoice} />
            <Route exact path="/admin/sales-analytics" component={SalesAnalytics} />
            <Route exact path="/admin/control-center" component={ControlCenter} /> 
          </Switch>
        </div>
      </div>
    </>
  );
};

export default withRouter(AdminRoute);
