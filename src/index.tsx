/* tslint:disable */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import configureStore from '@/store/configureStore'
import createBrowserHistory from 'history/createBrowserHistory'

// global css
import 'sanitize.css'
import './styles/index.css'
import 'font-awesome/css/font-awesome.min.css'

const store = configureStore()
const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <App history={history}></App>
  </Provider>,
  document.getElementById('root') as HTMLElement,
)
registerServiceWorker()
