import * as React from 'react'
import compose from 'recompose/compose'
import styled from 'styled-components'

import HeaderBanner from '@/components/molecules/Banner'
import logo from '@/static/images/logo.svg'
import Img from '@/components/atoms/Img'
import SearchBox from '@/components/molecules/SearchBox'
import NavMenu from '@/components/molecules/NavMenu'
import NavBarAccount from '@/components/molecules/NavBarAccount'


// component
export const HeaderComponent = (props: HeaderProps): JSX.Element => {
  return (
    <StyledHeader>
      <div>
        <NavBar>
          <NavBarAccount />
        </NavBar>
        <Nav>
          <NavContainer>
            <Logo>
              <Img
                src={logo}
                width={50}
                height={50}
              />
            </Logo>
            <NavMenu />
            <SearchBoxWrapper>
              <SearchBox />
            </SearchBoxWrapper>
          </NavContainer>
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
  border-bottom: 1px solid #e5e5e5;
  font-family: 'Oswald', sans-serif;
  background: #fff;
`

const Nav = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
`

const DefaultContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const NavContainer = styled(DefaultContainer)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 60% 1fr;
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
