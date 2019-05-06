import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import thunk from 'redux-thunk'
import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import { Provider } from 'react-redux'
import categoriesReducer from './reducers/categoriesReducer'
import favoritesReducer from './reducers/favoritesReducer'

const reducer = combineReducers({
    categories: categoriesReducer,
    favorites: favoritesReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <App />
    </div>
  </Provider>,
  document.getElementById('root'))
