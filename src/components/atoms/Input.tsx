import * as React from 'react'
import compose from 'recompose/compose'
import pure from 'recompose/pure'
import styled from 'styled-components'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputComponent = (props: InputProps): JSX.Element => {
  return <StyledInput {...props} />
}

export default compose<InputProps, InputProps>(pure)(InputComponent)

const StyledInput = styled.input`
  width: 100%;
  font-family: 'Roboto';
  font-size: 1.6rem;
  border: 1px solid #ddd;
  padding: 10px;
`
