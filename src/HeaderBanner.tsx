import * as React from 'react'
import compose from 'recompose/compose'
import styled from 'styled-components'

interface HeaderBannerComponentProps {
  title: string
}

// component
export const HeaderBanner = (
  props: HeaderBannerComponentProps,
): JSX.Element => {
  return (
    <Banner>
      <div className="banner-container">
        <div className="arrow arrow-let">
          <i className="fa fa-angle-left" aria-hidden="true" />
        </div>
        <div className="banner-content">
          <p>
            {props.title}
            <a href="#">Check it out</a>
          </p>
        </div>
        <div className="arrow arrow-right">
          <i className="fa fa-angle-right" aria-hidden="true" />
        </div>
      </div>
    </Banner>
  )
}

// class
export const enhance = compose<
  HeaderBannerComponentProps,
  HeaderBannerComponentProps
>()
export default enhance(HeaderBanner)

// style
const Banner = styled.div`
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  background: #f7f7f7;
  font-size: 1.6rem;

  .banner-container {
    width: 600px;
    height: 60px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 10% 80% 10%;

    > * {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .arrow > i {
    font-size: 2rem;
  }
`
