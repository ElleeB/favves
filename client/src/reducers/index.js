import { combineReducers } from 'redux'
import categories from './categories'
import favorites from './favorites'

export default combineReducers({
  categories,
  favorites
})
