import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers/index'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <App />
    </div>
  </Provider>,
  document.getElementById('root'))
