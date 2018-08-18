import * as React from 'react'
import compose from 'recompose/compose'
import styled from 'styled-components'

import HeaderBanner from '@/HeaderBanner'
import HeaderNavSubMenu from '@/HeaderNavSubMenu'
import { StateHandler, StateHandlerMap, withStateHandlers } from 'recompose'
import logo from '@/static/images/logo.svg'

export const renderHeaderNavSubMenu = (
  showHeaderNavSubMenu: boolean,
): JSX.Element | null => {
  return showHeaderNavSubMenu ? <HeaderNavSubMenu /> : null
}

// component
export const HeaderComponent = (props: Props): JSX.Element => {
  const {
    toggleHeaderNavSubMenu,
    showHeaderNavSubMenu,
    toggleIsFocusedOnSearch,
  } = props

  return (
    <StyledHeader>
      <nav>
        <NavBar>
          <NavBarAccount>
            <li>
              <a href="#">
                <i className="fa fa-user-circle" aria-hidden="true" />
                <span>My Account</span>
              </a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </NavBarAccount>
        </NavBar>

        <NavMenu>
          <div className="container">
            <Logo>
              <img src={logo} width={50} height={50} />
            </Logo>

            <ul className="nav-menu-list">
              <li
                className="nav-menu-list-item men"
                // tslint:disable jsx-no-lambda
                onMouseEnter={() => toggleHeaderNavSubMenu(true)}
                onMouseLeave={() => toggleHeaderNavSubMenu(false)}
              >
                <a href="#">men</a>
                {renderHeaderNavSubMenu(showHeaderNavSubMenu)}
              </li>
              <li>
                <a href="#">women</a>
              </li>
              <li>
                <a href="#">boys</a>
              </li>
              <li>
                <a href="#">girls</a>
              </li>
              <li>
                <a href="#">customize</a>
              </li>
            </ul>
            <SearchWrapper {...props}>
              <form role="search">
                <i className="fa fa-search" aria-hidden="true" />
                <input
                  type="search"
                  className="input search"
                  placeholder="Search for"
                  onFocus={() => toggleIsFocusedOnSearch(true)}
                  onBlur={() => toggleIsFocusedOnSearch(false)}
                />
                <input type="submit" value="submit" />
              </form>
            </SearchWrapper>
          </div>
        </NavMenu>
      </nav>
      <HeaderBanner title={'Shoes, Clothes on Big Sale! '} />
    </StyledHeader>
  )
}

// class
type State = showHeaderNavSubMenuState & isFocusedOnSearchState
type showHeaderNavSubMenuState = {
  showHeaderNavSubMenu: boolean
}
type isFocusedOnSearchState = {
  isFocusedOnSearch: boolean
}

interface Updaters extends StateHandlerMap<State> {
  toggleHeaderNavSubMenu: StateHandler<showHeaderNavSubMenuState>
  toggleIsFocusedOnSearch: StateHandler<isFocusedOnSearchState>
}

type Props = State & Updaters

export const HeaderComponentEnhanced = compose<Props, {}>(
  withStateHandlers(() => ({ showHeaderNavSubMenu: false }), {
    toggleHeaderNavSubMenu: () => (value: boolean) => ({
      showHeaderNavSubMenu: value,
    }),
  }),
  withStateHandlers(() => ({ isFocusedOnSearch: false }), {
    toggleIsFocusedOnSearch: () => (value: boolean) => ({
      isFocusedOnSearch: value,
    }),
  }),
)(HeaderComponent)
export default class Header extends React.Component<{}, {}> {
  public render() {
    return <HeaderComponentEnhanced />
  }
}

// styles
const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
`

const NavBar = styled.div`
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #e5e5e5;
  font-family: 'Oswald', sans-serif;
  background: #fff;
`

const NavBarAccount = styled.ul`
  display: flex;

  > li {
    padding: 0 10px;
  }

  > li > a {
    font-size: 1.2rem;
    color: #8d8d8d;
    display: inline-block;

    > i {
      font-size: 1.6rem;
      vertical-align: middle;
      margin-right: 2px;
    }
  }
`

const NavMenu = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;

  > .container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 60% 1fr;
  }

  .nav-menu-list {
    display: flex;
    justify-content: center;
    align-items: center;

    > li {
      padding: 15px 20px;
      height: 100%;
      display: flex;
      align-items: center;

      > a {
        font-family: 'Oswald', sans-serif;
        font-size: 1.6rem;
        text-transform: uppercase;
        color: #2f2f2f;
        line-height: 1.5;
        font-weight: 600;
      }

      > a:after {
        content: '';
        display: block;
        visibility: hidden;
        width: 100%;
        height: 1px;
        margin-top: 2px;
        background: #2f2f2f;
      }
    }

    .nav-menu-list-item.on {
      .nav-menu-sub {
        display: block;
      }

      > a:after {
        visibility: visible;
      }
    }
  }
`

const SearchWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: flex-end;

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
    font-size: 1.6rem;
    transition: border 0.25s;
    border: ${(props: any) =>
      props.isFocusedOnSearch ? '1px solid #2F2F2F' : '1px solid #ddd'};
  }

  input[type='submit'] {
    display: none;
  }
`

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
