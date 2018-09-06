import * as React from 'react'
import styled from 'styled-components'
import {
  StateHandler,
  StateHandlerMap,
  withStateHandlers,
  compose,
  withHandlers,
} from 'recompose'
import Fade from '@/components/atoms/Fade'
import DropdownMenu from '@/components/atoms/DropdownMenu'

export const NavBarAccountComponent = (
  props: NavBarAccountProps,
): JSX.Element => {
  const { toggleMenu, showMenu } = props

  return (
    <NavBarAccount>
      <li>
        <NavBarAccountLink href="#">
          <span>Join / Log In To ReactPlus Account</span>
        </NavBarAccountLink>
      </li>
      <li>
        <NavBarAccountLink
          href="#"
          show={showMenu('help')}
          onMouseEnter={() => toggleMenu({ help: true })}
          onMouseLeave={() => toggleMenu({ help: false })}
        >
          Help
          <Fade
            in={showMenu('help')}
            exitActiveTransition="opacity .5s ease .5s;"
          >
            <DropdownMenu>
              <HelpList>
                <HelpListItem>
                  <HelpListItemLink href="#">Order Status</HelpListItemLink>
                </HelpListItem>
                <HelpListItem>
                  <HelpListItemLink href="#">
                    Ships and Delivery
                  </HelpListItemLink>
                </HelpListItem>
                <HelpListItem>
                  <HelpListItemLink href="#">Returns</HelpListItemLink>
                </HelpListItem>
                <HelpListItem>
                  <HelpListItemLink href="#">Contact Us</HelpListItemLink>
                </HelpListItem>
                <HelpListItem>
                  <HelpListItemLink href="#">Privacy Policy</HelpListItemLink>
                </HelpListItem>
                <HelpListItem>
                  <HelpListItemLink href="#">
                    Terms & Conditions
                  </HelpListItemLink>
                </HelpListItem>
                <HelpListItem>
                  <HelpListItemLink href="#">Site Feedback</HelpListItemLink>
                </HelpListItem>
                <HelpListItem>
                  <HelpListItemLink href="#">View All</HelpListItemLink>
                </HelpListItem>
              </HelpList>
            </DropdownMenu>
          </Fade>
        </NavBarAccountLink>
      </li>
    </NavBarAccount>
  )
}

type NavBarAccountState = {
  menuStatus: {}
}

interface NavBarAccountUpdaters extends StateHandlerMap<NavBarAccountState> {
  toggleMenu: StateHandler<NavBarAccountState>
}

type NavBarAccountProps = NavBarAccountState & NavBarAccountUpdaters

export default compose<NavBarAccountProps, {}>(
  withStateHandlers(() => ({ menuStatus: {} }), {
    toggleMenu: ({ menuStatus }) => payload => ({
      menuStatus: {
        ...menuStatus,
        ...payload,
      },
    }),
  }),
  withHandlers({
    showMenu: (props: NavBarAccountProps) => (key: string): boolean =>
      props.menuStatus[key],
  }),
)(NavBarAccountComponent)

// styles
const NavBarAccount = styled.ul`
  display: flex;
  padding-right: 100px;
`

type NavBarAccountLinkProps = { show: boolean }
const NavBarAccountLink = styled<NavBarAccountLinkProps, any>('a')`
  position: relative;
  padding: 12px;
  font-size: 1.2rem;
  color: #8d8d8d;
  display: flex;
  align-items: center;
  transition: color 0.25s;
  border-bottom: ${(props: NavBarAccountLinkProps) =>
    props.show ? '1px solid #2f2f2f;' : '1px solid transparent'};
  transition: border-bottom 0.25s;

  &:hover {
    color: #2f2f2f;
  }

  > i {
    font-size: 1.6rem;
    vertical-align: middle;
    margin-right: 5px;
  }
`

const HelpList = styled.ul``
const HelpListItem = styled.li`
  margin-bottom: 5px;
  text-align: left;
`
const HelpListItemLink = styled.a`
  color: #2f2f2f;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  transition: opacity 0.25s;
  line-height: 1.5;

  &:hover {
    opacity: 0.5;
  }
`
