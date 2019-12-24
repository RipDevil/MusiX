import React from 'react';
// import PropTypes from "prop-types";
import { withRouter, Redirect } from 'react-router-dom';

const Wrap = IsLoggedIn => Component => {
    return withRouter(() => (IsLoggedIn ? <Component /> : <Redirect to="/login" />));
}

export default Wrap;