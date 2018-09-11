import * as React from 'react'
import { HomeProps } from '@/containers/HomeContainer'

export default class Home extends React.PureComponent<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <div className="Home">
        <div>here</div>
      </div>
    )
  }
}
