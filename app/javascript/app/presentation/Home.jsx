import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Credentials from '../presentation/Credentials';
import UserData from '../presentation/UserData';

let Home = ({ userData }) => {
  if (Object.keys(userData).length == 0 || userData.email == null) {
    return (<h1>Welcome, please login.</h1>)
  } else {
    return (
      <div>
        <h1>Welcome Home!</h1>
        <UserData />
        <Credentials />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { userData: state.userData }
}

Home = connect(mapStateToProps)(Home)

export default Home;
