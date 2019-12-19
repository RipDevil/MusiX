import React from "react";
import PropTypes from "prop-types";
import { Router, Route, Switch } from "react-router-dom";

import Authorization from '../auth/Authorization';
import Loading from '../loading/Loading';

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
      <Loading/>
    );
  }
}

// function App() {
//   return (
//       <Row className="centrify" type="flex" justify="center" align="middle">
//         <Col>
//             <i class="fa fa-circle-o-notch fa-spin fa-5x fa-fw loading-color"></i>
//             {/* <i class="fa fa-check fa-4x fa-fw"></i> */}
//         </Col>
//       </Row>
//   );
// }

export default App;
