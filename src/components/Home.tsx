import * as React from 'react'
import Header from '@/components/organisms/Header'
import { HomeProps } from '@/containers/HomeContainer'

export default class Home extends React.PureComponent<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <div className="Home">
        <Header />
      </div>
    )
  }
}
