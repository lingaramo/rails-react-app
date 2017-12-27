import React from 'react'
import { connect } from 'react-redux';

let Credentials = ({ credentials }) => {
  if (credentials) {
    return (
      <ul>
        <li>Acces token: {credentials.access_token}</li>
        <li>Token type: {credentials.token_type}</li>
        <li>Client: {credentials.client}</li>
        <li>Expiry: {credentials.expiry}</li>
        <li>UID: {credentials.uid}</li>
      </ul>
    )
  } else {
    return null
  }
}

const mapStateToProps = state => {
  return { credentials: state.sessionCredentials }
}

Credentials = connect(mapStateToProps)(Credentials)

export default Credentials;
