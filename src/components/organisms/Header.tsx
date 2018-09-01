import * as React from 'react'
import compose from 'recompose/compose'
import styled from 'styled-components'

import HeaderBanner from '@/components/molecules/Banner'
import logo from '@/static/images/logo.svg'
import Img from '@/components/atoms/Img'
import SearchBox from '@/components/molecules/SearchBox'
import NavMenu from '@/components/molecules/NavMenu'

// component
export const HeaderComponent = (props: HeaderProps): JSX.Element => {
  return (
    <StyledHeader>
      <div>
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

        <Nav>
          <div className="container">
            <Logo>
              <Img src={logo} width={50} height={50} />
            </Logo>
            <NavMenu />
            <SearchBoxWrapper>
              <SearchBox />
            </SearchBoxWrapper>
          </div>
        </Nav>
      </div>
      <HeaderBanner title={'Shoes, Clothes on Big Sale! '} />
    </StyledHeader>
  )
}

// class
type HeaderState = {}
type HeaderProps = HeaderState

export default compose<HeaderProps, {}>()(HeaderComponent)

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
    display: flex;
    align-items: center;

    > i {
      font-size: 1.6rem;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
`

const Nav = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;

  > .container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 60% 1fr;
  }
`
const SearchBoxWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: flex-end;
`

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
