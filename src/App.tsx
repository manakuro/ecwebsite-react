import * as React from 'react'
import { History } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import routes, { Route } from '@/routes/Routes'
import { Switch } from 'react-router'

export interface AppProps {
  history: History
}

const App = (props: AppProps) => {
  const { history } = props

  return (
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map((r: Route, i: number) => {
          const RouteComponent = r.route
          return <RouteComponent {...props} key={i} />
        })}
      </Switch>
    </ConnectedRouter>
  )
}

export default App
