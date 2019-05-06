import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import categoriesReducer from './reducers/categoriesReducer'


const store = createStore(categoriesReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <App />
    </div>
  </Provider>,
  document.getElementById('root'))
