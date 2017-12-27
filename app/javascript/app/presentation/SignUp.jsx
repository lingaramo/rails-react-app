import React from 'react';
import { connect } from 'react-redux';

import { signUp, fetchCredentials } from '../actions';

let SignUp = ({ onSubmit }) => {

  return (
    <div>
      <h1>Sign up form</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Password:
          <input type="password" name="password_confirmation" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch, prevProps) => {
  return {
    onSubmit: (event) => {
      event.preventDefault()
      var form = document.querySelector('form')
      dispatch(signUp(form))
    }
  }
}

SignUp = connect(null, mapDispatchToProps)(SignUp)

export default SignUp;
