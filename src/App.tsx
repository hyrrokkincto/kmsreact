import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import AdminRoute from './Routers/Admin';

function App() {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/">
            <Redirect to='/admin' />
          </Route>
          <Route path="/admin" component={AdminRoute} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
