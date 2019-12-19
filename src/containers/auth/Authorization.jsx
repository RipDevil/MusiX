import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';

const Authorization = allowedRoles => WrappedComponent => {
    class WithAuthorization extends React.Component {

        render() {
            return <span>test!!!</span>
        }
    }
}

export default Authorization;