import * as React from 'react'
import Header from '@/components/organisms/Header'
import { Dispatch } from 'redux'
import { RootState } from '@/modules/reducers'
import { connect } from 'react-redux'
import { HomeState } from '@/modules/home'
import { RouteComponentProps } from 'react-router'

class Home extends React.Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props)
  }

  public render(): JSX.Element {
    console.log(this.props)

    return (
      <div className="Home">
        <Header />
      </div>
    )
  }
}

type HomeStateFromProps = HomeState
type HomeDispatchFromProps = {}
type HomeOwnProps = RouteComponentProps<any>
type HomeProps = HomeStateFromProps & HomeDispatchFromProps & HomeOwnProps

export function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {}
}

export function mapStateToProps(state: RootState, ownProps: HomeOwnProps) {
  return {
    ...state.home,
    ...ownProps,
  }
}

export default connect<HomeStateFromProps, HomeDispatchFromProps, HomeOwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
