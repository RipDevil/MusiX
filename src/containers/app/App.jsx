import React from "react";
// import PropTypes from "prop-types";
import { Router, Route, Switch } from "react-router-dom";

// import Authorization from '../auth/Authorization';
import Loading from 'containers/loading/Loading';
import NotFound from 'containers/notFound/NotFound';
import WrapWitchAuthCheck from "../auth/Authorization";

class App extends React.Component {
  constructor(props) {
    super(props);

    // TODO: use store (effector)

    this.state = {
      Permission: WrapWitchAuthCheck(true) // TODO: Authorization(false),
    };

    console.log(this.state)
  }

  // componentDidUpdate() {
  //   this.setState({
  //     Permission: WrapWitchAuthCheck(false)
  //   })
  // }

  render() {
    return (
      <>
        <Router history={this.props.history}>
          <Switch>
            <Route exact path={"/login"} component={Loading} />
            <Route exact path={"/"} component={this.state.Permission(() => <div>TODO: WRAPPED COMPONENT</div>)} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
