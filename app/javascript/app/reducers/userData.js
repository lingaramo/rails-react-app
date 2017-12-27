const userData = (state = {}, action) => {
  switch(action.type) {
    case 'USER_DATA':
      return Object.assign({}, state, action.userData)
    case 'CLEAR_USER_DATA':
      let clearUserData = {};
      for (const key of Object.keys(state)) {
        clearUserData[key] = null;
      }
      return Object.assign({}, state, clearUserData)
    default:
      return state
  }
}

export default userData;
