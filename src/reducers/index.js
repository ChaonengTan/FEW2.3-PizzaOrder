import { combineReducers } from 'redux'
import pizzaReducer from './pizzaReducer'

export default combineReducers({
  passwords: pizzaReducer
})
