import { combineReducers } from 'redux';
import sessionCredentials from './sessionCredentials';
import userData from './userData';

const credentialsApp = combineReducers({sessionCredentials, userData})

export default credentialsApp
