import * as React from 'react'
import compose from 'recompose/compose'
import styled from 'styled-components'

import './Header.css'
import HeaderBanner from '@/HeaderBanner'
import HeaderNavSubMenu from '@/HeaderNavSubMenu'
import { withHandlers, withState } from 'recompose'

// component
export const renderHeaderNavSubMenu = (
  showHeaderNavSubMenu: boolean,
): JSX.Element | null => {
  return showHeaderNavSubMenu ? <HeaderNavSubMenu /> : null
}

export const HeaderComponent = (props: any): JSX.Element => {
  const { toggleHeaderNavSubMenu, showHeaderNavSubMenu } = props

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
            <div className="logo" />

            <ul className="nav-menu-list">
              <li
                className="nav-menu-list-item men"
                onMouseEnter={toggleHeaderNavSubMenu}
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
            <SearchWrapper>
              <i className="fa fa-search" aria-hidden="true" />
              <form>
                <input
                  type="search"
                  className="input search"
                  value=""
                  placeholder="Search for"
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
export const enhance = compose<any, any>(
  withState('showHeaderNavSubMenu', 'updateHeaderNavSubMenu', false),
  withHandlers({
    toggleHeaderNavSubMenu: ({ updateHeaderNavSubMenu }) => () =>
      updateHeaderNavSubMenu(
        (showHeaderNavSubMenu: boolean): boolean => !showHeaderNavSubMenu,
      ),
  }),
)
export const HeaderComponentEnhanced = enhance(HeaderComponent)
export default class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return <HeaderComponentEnhanced {...this.props} />
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
  padding: 15px 0;
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
      padding: 0 10px;

      > a {
        font-family: 'Oswald', sans-serif;
        font-size: 1.6rem;
        text-transform: uppercase;
        color: #2f2f2f;
        line-height: 1.5;
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
  position: relative;

  > i {
    position: absolute;
    top: 50%;
    left: 12px;
    margin-top: -8px;
    font-size: 1.6rem;
  }

  .search {
    font-size: 1.6rem;
  }

  input[type='submit'] {
    display: none;
  }
`
