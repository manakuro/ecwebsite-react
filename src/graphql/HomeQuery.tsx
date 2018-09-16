import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export type HomeQueryData = {
  allProducts: any[]
}
export type HomeQueryVariables = {}

export const homeQuery = gql`
  query {
    allProducts {
      id
    }
  }
`

export default class HomeQuery extends Query<HomeQuery, HomeQueryVariables> {}
