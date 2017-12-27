import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Authorize = (allowedRoles) => {
  return WrappedComponent => {
    let WithAuthorization = ({ user }) => {
      if (Object.keys(user).length == 0) {
        return (<Redirect to="/app/sign_in" />)
      }
      if (allowedRoles.includes(user.role)) {
        return <WrappedComponent />
      } else {
        return(<h1>You arn't allowed: {allowedRoles} {Object.keys(user).length == 0 ? "Not logged in" : JSON.stringify(user)}</h1>)
      }
    }
    WithAuthorization = connect((state) => {
      return { user: state.userData }
    })(WithAuthorization)
    return WithAuthorization
  }
}

export default Authorize;
