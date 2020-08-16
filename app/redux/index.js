import {combineReducers} from 'redux'
import userReducer from './users'

const appReducer = combineReducers({
  user: userReducer,
})

export default appReducer
