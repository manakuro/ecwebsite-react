/* tslint:disable */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import configureStore from '@/store/configureStore'
import createBrowserHistory from 'history/createBrowserHistory'
import configureApolloClient from '@/api/api'

// global css
import 'sanitize.css'
import './styles/index.css'
import 'font-awesome/css/font-awesome.min.css'

const store = configureStore()
const history = createBrowserHistory()
const client  = configureApolloClient()

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App history={history}></App>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement,
)
registerServiceWorker()
