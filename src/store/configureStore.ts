import { applyMiddleware, createStore } from 'redux'
import rootReducer from '@/modules/reducers'

import createBrowserHistory from 'history/createBrowserHistory'
import { connectRouter, routerMiddleware } from 'connected-react-router'

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = [routerMiddleware(history)]

export default function configureStore() {
  return createStore(
    connectRouter(history)(rootReducer),
    applyMiddleware(...middleware),
  )
}
