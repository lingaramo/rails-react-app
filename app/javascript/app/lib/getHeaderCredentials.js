export const getHeaderCredentials = headers => {
  var credentials = { access_token: headers.get("access-token"),
  token_type: headers.get("token-type"),
  client: headers.get("client"),
  expiry: headers.get("expiry"),
  uid: headers.get("uid") }
  
  return credentials;
}
