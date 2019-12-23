import React from "react";
import { useStore } from "effector-react";
import { Router, Route, Switch } from "react-router-dom";

import AppConfig from 'containers/app/AppConfig';
// import Loading from 'containers/loading/Loading';
import NotFound from 'containers/notFound/NotFound';
import Wrap from "containers/permissionWrapper/Wrapper";
import Login from "containers/login/Login";
import WithLayout from "containers/layout/Layout"

import { $user, logout } from "models/user";

const App = ({ history }) => {
  const { isLogged } = useStore($user);
  return (
    <AppConfig>
      <Router history={history}>
        <Switch>
          <Route exact path={"/login"} component={() => <Login IsLoggedIn={isLogged} />} />
          <Route exact path={"/"} component={() => <Wrap IsLoggedIn={isLogged} Component={() => (<WithLayout component={<div>MusiX</div>} isLoggedIn={isLogged} />)} />} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </AppConfig>
  );
}

export default App;
