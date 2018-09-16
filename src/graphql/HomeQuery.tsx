import { Query } from 'react-apollo'
import gql from 'graphql-tag'

interface HomeQuery {
  allProducts: any[]
}

export const allProducts = gql`
  query {
    allProducts {
      id
    }
  }
`

class HomeQuery extends Query<HomeQuery, any> {}
export default HomeQuery
