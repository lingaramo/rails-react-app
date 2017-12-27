import React from 'react';
import Credentials from '../presentation/Credentials';
import { connect } from 'react-redux';

let CredentialsList = ({ credentials }) =>
  {
    return (
      credentials.map((credential, index) => (<Credentials key={index} {...credential} />))
    )
  }

const mapStateToProps = state => {
  return {
    credentials: state.credentials
  }
}

CredentialsList = connect(mapStateToProps)(CredentialsList)

export default CredentialsList;
