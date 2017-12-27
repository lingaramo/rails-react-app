let initialState = {
    access_token: "None",
    token_type: "None",
    client: "None",
    expiry: "None",
    uid: "None"
}

const sessionCredentials = (state = initialState, action) => {

  switch (action.type) {
    case 'SESSION_CREDENTIAL':
      return Object.assign({}, state, action.sessionCredentials)
    default:
      return state
  }
}

export default sessionCredentials
