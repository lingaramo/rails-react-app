import React from 'react';

import 'whatwg-fetch';
import { connect } from 'react-redux';

import { signIn } from '../actions';

let SignIn = ({ onSubmit }) => {
  return (
    <div>
      <h1>Sign in form</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Sign In" />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (event) => {
      event.preventDefault()
      var form = document.querySelector('form')
      dispatch(signIn(form))
    }
  }
}

SignIn = connect(null, mapDispatchToProps)(SignIn)

export default SignIn;
