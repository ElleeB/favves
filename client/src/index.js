import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import categoriesReducer from './reducers/categoriesReducer'
import './App.css'

const store = createStore(categoriesReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <App />
    </div>

  </Provider>,
  document.getElementById('root'))
