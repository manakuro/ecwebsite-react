import * as React from 'react'
import compose from 'recompose/compose'
import pure from 'recompose/pure'

interface ImgProps {
  src: string
  width?: string | number
  height?: string | number
}

export const ImgComponent = (props: ImgProps): JSX.Element => {
  return <img {...props} />
}

export default compose<ImgProps, ImgProps>(pure)(ImgComponent)
