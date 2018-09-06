import * as React from 'react'
import compose from 'recompose/compose'
import pure from 'recompose/pure'
import styled from 'styled-components'

export interface DropdownMenuProps {
  children?: React.ReactNode
}

export const DropdownMenuComponent = (
  props: DropdownMenuProps,
): JSX.Element => {
  return (
    <DropDownMenu>
      <DropDownMenuContainer>{props.children}</DropDownMenuContainer>
    </DropDownMenu>
  )
}

export default compose<DropdownMenuProps, DropdownMenuProps>(pure)(
  DropdownMenuComponent,
)

const DropDownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 50%;
  margin-top: 2px;
  z-index: 1000;
`
const DropDownMenuContainer = styled.div`
  position: relative;
  right: -50%;

  background-color: white;
  border: 1px solid #e5e5e5;
  border-top: none;
  padding: 24px;
  white-space: nowrap;
`
