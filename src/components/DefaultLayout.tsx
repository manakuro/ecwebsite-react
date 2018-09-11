import * as React from 'react'
import Header from '@/components/organisms/Header'

export default class DefaultLayout extends React.PureComponent {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div className="defaultLayout">
        <Header />
        <main>{this.props.children}</main>
      </div>
    )
  }
}
