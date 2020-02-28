import React, { Suspense, lazy } from "react";
import { useStore } from "effector-react";
import { Router, Route, Switch } from "react-router-dom";

import AppConfig from 'containers/app/AppConfig';
import Loading from 'containers/loading/Loading';
import Wrap from 'containers/permissionWrapper/Wrapper';

import { $user } from "models/user";

const NotFound = lazy(() => import('containers/notFound/NotFound'));
const Login = lazy(() => import('containers/login/Login'));
const MainPage = lazy(() => import('containers/mainPage/MainPage'));
const Playlist = lazy(() => import('containers/playlist/Playlist'));

const App = ({ history }) => {
  const { isLogged } = useStore($user);
  const Permission = Wrap(isLogged); // TODO: isLogged
  return (
    <AppConfig>
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={"/login"} component={() => <Login IsLoggedIn={isLogged} />} />
            <Route exact path={"/"} component={Permission(MainPage)} />
            <Route exact path={"/playlist/:pid"} component={Permission(Playlist)} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </AppConfig>
  );
}

export default App;
