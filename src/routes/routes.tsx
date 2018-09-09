import * as React from 'react'
import { Route, Switch } from 'react-router'
import Home from '@/components/Home'

export default (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
)
