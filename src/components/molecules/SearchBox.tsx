import * as React from 'react'
import {
  StateHandler,
  StateHandlerMap,
  withStateHandlers,
  pure,
  compose,
} from 'recompose'
import styled from 'styled-components'
import Input from '@/components/atoms/Input'

export const SearchComponent = (props: SearchProps): JSX.Element => {
  const { toggleIsFocusedOnSearch } = props

  return (
    <StyledSearch {...props}>
      <form role="search">
        <i className="fa fa-search" aria-hidden="true" />
        <Input
          type="search"
          className="search"
          placeholder="Search for"
          // tslint:disable jsx-no-lambda
          onFocus={() => toggleIsFocusedOnSearch(true)}
          onBlur={() => toggleIsFocusedOnSearch(false)}
        />
        <input type="submit" value="submit" />
      </form>
    </StyledSearch>
  )
}

type SearchState = {
  isFocusedOnSearch: boolean
}
interface SearchUpdaters extends StateHandlerMap<SearchState> {
  toggleIsFocusedOnSearch: StateHandler<SearchState>
}
type SearchProps = SearchState & SearchUpdaters

export default compose<SearchProps, {}>(
  pure,
  withStateHandlers(() => ({ isFocusedOnSearch: false }), {
    toggleIsFocusedOnSearch: () => (value: boolean) => ({
      isFocusedOnSearch: value,
    }),
  }),
)(SearchComponent)

/* styles */
// @todo figure out how to provide props to styled components
// @see https://github.com/styled-components/styled-components/issues/630
const StyledSearch = styled.div`
  > form {
    width: ${(props: any) => (props.isFocusedOnSearch ? '230px' : '190px')};
    position: relative;
    transition: width 0.25s;

    > i {
      position: absolute;
      top: 50%;
      left: 12px;
      margin-top: -8px;
      font-size: 1.6rem;
    }
  }

  .search {
    transition: border 0.25s;
    border: ${(props: any) =>
      props.isFocusedOnSearch ? '1px solid #2F2F2F' : '1px solid #ddd'};
  }

  input[type='submit'] {
    display: none;
  }
`
