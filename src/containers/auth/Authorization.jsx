import React from 'react';
// import PropTypes from "prop-types";
import { withRouter, Redirect } from 'react-router-dom';

const Wrap = ({ IsLoggedIn, Component }) => (<>{IsLoggedIn ? <Component /> : <Redirect to="/login" />}</>);

export default withRouter(Wrap);