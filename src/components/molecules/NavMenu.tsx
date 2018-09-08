import * as React from 'react'
import compose from 'recompose/compose'
import styled from 'styled-components'

import HeaderNavSubMenu from '@/components/molecules/NavSubMenu'
import {
  StateHandler,
  StateHandlerMap,
  withStateHandlers,
  withHandlers,
} from 'recompose'
import Fade from '@/components/atoms/Fade'

const NAV_MENU = [
  { name: 'mens', SubMenu: HeaderNavSubMenu },
  { name: 'women', SubMenu: HeaderNavSubMenu },
  { name: 'boys', SubMenu: HeaderNavSubMenu },
  { name: 'girls', SubMenu: HeaderNavSubMenu },
  { name: 'customize', SubMenu: HeaderNavSubMenu },
]

export function renderNavMenuListItems({
  showNavSubMenu,
  toggleNavSubMenu,
}: NavMenuProps): JSX.Element[] {
  return NAV_MENU.map((n, i) => {
    const { name, SubMenu } = n
    return (
      <NavMenuListItem
        key={i}
        show={showNavSubMenu([name])}
        onMouseEnter={() => toggleNavSubMenu({ [name]: true })}
        onMouseLeave={() => toggleNavSubMenu({ [name]: false })}
      >
        <NavMenuListItemLink href="#">{name}</NavMenuListItemLink>
        <Fade
          in={showNavSubMenu([name])}
          exitActiveTransition="opacity .5s ease .5s;"
        >
          <SubMenu />
        </Fade>
      </NavMenuListItem>
    )
  })
}

// component
export const HeaderComponent = (props: NavMenuProps): JSX.Element => {
  return <NavMenuList>{renderNavMenuListItems(props)}</NavMenuList>
}

// class
type NavMenuState = {
  navSubMenuStatus: {
    mens: boolean
  }
}

interface NavMenuUpdaters extends StateHandlerMap<NavMenuState> {
  toggleNavSubMenu: StateHandler<NavMenuState>
}

type NavMenuProps = NavMenuState & NavMenuUpdaters

export default compose<NavMenuProps, {}>(
  withStateHandlers(() => ({ navSubMenuStatus: { mens: false } }), {
    toggleNavSubMenu: ({ navSubMenuStatus }) => payload => ({
      navSubMenuStatus: {
        ...navSubMenuStatus,
        ...payload,
      },
    }),
  }),
  withHandlers({
    showNavSubMenu: (props: NavMenuProps) => (key: string) =>
      props.navSubMenuStatus[key],
  }),
)(HeaderComponent)

// styles
const NavMenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

type NavMenuListItemProps = { show: boolean }
const NavMenuListItem = styled<NavMenuListItemProps, any>('li')`
  padding: 15px 20px;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: ${(props: NavMenuListItemProps) =>
    props.show ? '1px solid #2f2f2f;' : '1px solid transparent'};
  transition: border-bottom 0.25s;
`
const NavMenuListItemLink = styled.a`
  font-family: 'Oswald', sans-serif;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: #2f2f2f;
  line-height: 1.5;
  font-weight: 600;
  letter-spacing: 0.05em;
`
