import * as React from 'react'
import Home from '@/components/Home'
import { Dispatch } from 'redux'
import { RootState } from '@/modules/reducers'
import { connect } from 'react-redux'
import { HomeState } from '@/modules/home/reducer'
import { RouteComponentProps } from 'react-router'

export class HomeContainer extends React.Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props)
  }

  public render(): JSX.Element {
    return <Home {...this.props} />
  }
}

type HomeStateFromProps = HomeState
type HomeDispatchFromProps = {}
type HomeOwnProps = RouteComponentProps<any>
export type HomeProps = HomeStateFromProps &
  HomeDispatchFromProps &
  HomeOwnProps

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
)(HomeContainer)
