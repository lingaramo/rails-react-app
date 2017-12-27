import React from 'react';

import { connect } from 'react-redux';

import {
  BrowserRouter,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import { signOut, validateToken } from '../actions';

import Authorize from '../lib/authorize';

import SignIn from '../presentation/SignIn';
import SignUp from '../presentation/SignUp';
import Home from '../presentation/Home';
import adminWelcome from '../presentation/AdminWelcome';
import userWelcome from '../presentation/UserWelcome';
import loggedWelcome from '../presentation/LoggedWelcome';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Prevents calling validateToken with undefined sessionCredentials
    if (localStorage.getItem('sessionCredentials')) {
      this.props.validateToken()
    }
  }

  render() {
    var { signOut, userData } = this.props

    var loggedIn
    if (Object.keys(userData).length == 0 || userData.email == null) {
      loggedIn = false
    } else {
      loggedIn = true
    }

    return (
      <BrowserRouter basename={"/"}>
        <div>
          <div>
            <NavLink exact activeStyle={{fontWeight: 'bold', color: 'red'}} to="/app/">Home | </NavLink>
            { loggedIn ? null : <NavLink activeStyle={{fontWeight: 'bold', color: 'red'}} to="/app/sign_up">Sign up | </NavLink> }
            { loggedIn ? null : <NavLink activeStyle={{fontWeight: 'bold', color: 'red'}} to="/app/sign_in">Sign in | </NavLink> }
            { loggedIn ? <NavLink activeStyle={{fontWeight: 'bold', color: 'red'}} to="/app/admin">Admin | </NavLink> : null }
            { loggedIn ? <NavLink activeStyle={{fontWeight: 'bold', color: 'red'}} to="/app/user">User | </NavLink> : null }
            { loggedIn ? <NavLink activeStyle={{fontWeight: 'bold', color: 'red'}} to="/app/logged">Logged member</NavLink> : null }
            { loggedIn ? <a href="#" onClick={signOut}> | Sign out</a> : null }
          </div>

          <Route exact path="/app/" component={Home}/>
          <Route exact path="/app/admin" component={Authorize(['admin', 'manager'])(adminWelcome)}/>
          <Route exact path="/app/user" component={Authorize(['user'])(userWelcome)}/>
          <Route exact path="/app/logged" component={Authorize(['user', 'manager', 'admin'])(loggedWelcome)}/>

          <Route exact path="/app/sign_in" render={() => (
            loggedIn ? (
              <Redirect to="/app" />
            ) : (
              <SignIn />
            )
          )} />

          <Route exact path="/app/sign_up" render={() => (
            loggedIn ? (
              <Redirect to="/app" />
            ) : (
              <SignUp />
            )
          )} />

        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return { userData: state.userData }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: (event) => {
      event.preventDefault()
      dispatch(signOut())
    },
    validateToken: () => {
      dispatch(validateToken())
    }

  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
