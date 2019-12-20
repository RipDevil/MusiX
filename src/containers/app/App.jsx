import React from "react";
// import PropTypes from "prop-types";
import { Router, Route, Switch } from "react-router-dom";

import AppConfig from 'containers/app/AppConfig';
// import Loading from 'containers/loading/Loading';
import NotFound from 'containers/notFound/NotFound';
import Wrap from "containers/permissionWrapper/Wrapper";
import Login from "containers/login/Login";

const App = ({ history }) => {
  const [permission] = React.useState(false);
  return (
    <AppConfig>
      <Router history={history}>
        <Switch>
          <Route exact path={"/login"} component={() => <Login IsLoggedIn={permission} />} />
          <Route exact path={"/"} component={() => <Wrap IsLoggedIn={permission} Component={() => <div>HERE WILL BE MUSIX</div>} />} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </AppConfig>
  );
}

export default App;
