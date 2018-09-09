import * as React from 'react'
import { Route, Switch } from 'react-router'
import Home from '@/containers/HomeContainer'

export default (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
)
