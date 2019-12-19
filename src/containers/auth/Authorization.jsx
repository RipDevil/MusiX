import React from 'react';
// import PropTypes from "prop-types";
import { withRouter, Redirect } from 'react-router-dom';

const WrapWitchAuthCheck = IsLoggedIn => WrappedComponent => {
    class WithAuthorization extends React.Component {

        render() {
            return (
                <>{IsLoggedIn ? <WrappedComponent /> : <Redirect to="/login" />}</>
            );
        }
    }

    return withRouter(WithAuthorization);
}


export default WrapWitchAuthCheck;