import React from "react";
// import PropTypes from "prop-types";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// import Authorization from '../auth/Authorization';
import Loading from '../loading/Loading';
import NotFound from '../notFound/NotFound';

class App extends React.Component {
  //  There will be links for calls and roles
  // static propTypes = {
  //   links: PropTypes.object,
  //   roles: PropTypes.object,
  // }

  constructor(props) {
    super(props);

    this.state = {
      UserPermission: null,
    };
  }

  componentDidUpdate(prevProps) {
    prevProps.roles !== this.props.roles && this.setState({
      UserPermission: this.props.roles.user,
    })
  }

  render() {
    return (
      <>
        <Router history={this.props.history}>
          <Switch>
            <Route exact path={"/login"} component={Loading} />
            <Route exact path={"/"} component={() => <div>Here will be <strong>musix</strong> player</div>} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
