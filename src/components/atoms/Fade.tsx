import * as React from 'react'
import transition from 'styled-transition-group'

const StyledFade = transition.div.attrs({
  unmountOnExit: true,
  timeout: 250,
})`
  z-index: 1000;
  &:enter { opacity: 0; }
  &:enter-active {
    opacity: 1;
    transition: opacity .5s ease;
  }

  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0;
    transition: ${(props: any) =>
      props.exitActiveTransition
        ? props.exitActiveTransition
        : 'opacity .5s ease'};
  }
`

export default (props: any): JSX.Element => {
  return <StyledFade {...props} />
}
