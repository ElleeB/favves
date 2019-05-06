import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import favoritesReducer from './favoritesReducer'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  favorites: favoritesReducer
})

export default rootReducer
