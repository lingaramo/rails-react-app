import React from 'react';
import { connect } from 'react-redux';

let UserData = ({ userData }) => {
  return (
    <ul>
      {Object.entries(userData).map((data, index) => (<li key={index}>{data[0]}: {data[1]}</li>))}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  }
}

UserData = connect(mapStateToProps)(UserData);

export default UserData;
