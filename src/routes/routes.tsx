import * as React from 'react'
import { Route } from 'react-router'
import Home from '@/containers/HomeContainer'
import DefaultLayout from '@/components/DefaultLayout'

export interface Route {
  route: () => JSX.Element
}

export default [
  {
    // home
    route: (props: any) => (
      <DefaultLayout {...props}>
        <Route path="/" component={Home} />
      </DefaultLayout>
    ),
  },
]
