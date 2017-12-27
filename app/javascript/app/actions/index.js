import 'whatwg-fetch';
import { getHeaderCredentials } from '../lib/getHeaderCredentials.js'

export const sessionCredentials = sessionCredentials => {
  return {
    type: 'SESSION_CREDENTIAL',
    sessionCredentials
  }
}

export const userData = userData => {
  return {
    type: 'USER_DATA',
    userData
  }
}

export const clearUserData = userData => {
  return { type: 'CLEAR_USER_DATA' }
}

export const signIn = (form) => {
  return dispatch => {
    const formData = new FormData(form);
    let jsonObject = {};

    for (const [key, value]  of formData.entries()) {
      jsonObject[key] = value;
    }

    return fetch('/auth/sign_in', {
      method: 'POST',
      headers: new Headers({"Content-Type": "application/json",
                            "Accept": "application/json" }),
      body: JSON.stringify(jsonObject),
    }).then(response => {
      if (response.ok) {
        dispatch(sessionCredentials(getHeaderCredentials(response.headers)))
      }
      return response.json()
    }).then(json => {
      if (json.data) {
        dispatch(userData(json.data))
      }
    }).catch(error => {
        console.log(error)
      }
    )
  }
}

export const signUp = (form) => {
    return dispatch => {
      const formData = new FormData(form);
      let jsonObject = {};

      for (const [key, value]  of formData.entries()) {
        jsonObject[key] = value;
      }
      return fetch('/auth', {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json",
                              "Accept": "application/json" }),
        body: JSON.stringify(jsonObject),
      }).then(response => {
        if (response.ok) {
          debugger
          dispatch(sessionCredentials(getHeaderCredentials(response.headers)))
        }
        return response.json()
      }).then(json => {
        debugger
        dispatch(userData(json.data))
      })
    }
}

export const signOut = () => {
  return dispatch => {
    var localStorageCredentials = JSON.parse(localStorage.getItem('sessionCredentials'))

    var credentials = {
      access_token: localStorageCredentials.access_token,
      client: localStorageCredentials.client,
      uid: localStorageCredentials.uid
    }

    return fetch('/auth/sign_out', {
      headers: new Headers({"Content-Type": "application/json",
                            "Accept": "application/json", ...credentials
                           }),
      method: 'DELETE'
    }).then(response => {
      if (response.ok) {
        dispatch(sessionCredentials(getHeaderCredentials(response.headers)))
        dispatch(clearUserData())
      }
      return response.json()
    }).catch(error => {
      console.log(error)
    })
  }
}

export const validateToken = () => {
  return dispatch => {
    var localStorageCredentials = JSON.parse(localStorage.getItem('sessionCredentials'))

    var credentials = {
      access_token: localStorageCredentials.access_token,
      client: localStorageCredentials.client,
      uid: localStorageCredentials.uid
    }

    return fetch('/auth/validate_token', {
      headers: new Headers({"Content-Type": "application/json",
                            "Accept": "application/json", ...credentials
                          }),
      method: 'GET'
    }).then(response => {
      dispatch(sessionCredentials(getHeaderCredentials(response.headers)))
      return response.json()
    }).then(json => {
      if (json.success) {
        dispatch(userData(json.data))
      } else {
        dispatch(clearUserData())
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
