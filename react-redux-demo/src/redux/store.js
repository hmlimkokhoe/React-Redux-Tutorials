import { createStore, applyMiddleware } from 'redux'
//import { composeWithDevTools } from 'redux-devtools-extension'
//import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

/**
 * rootReducers includes multiplie reducer functions
 */
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  //composeWithDevTools(applyMiddleware(thunk)) //logger is optional
)

export default store
