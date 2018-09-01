import * as React from 'react'
import compose from 'recompose/compose'
import styled from 'styled-components'

import logo from '@/static/images/logo.png'

// component
export const HeaderNavSubMenu = (): JSX.Element => {
  return (
    <StyledHeaderNavSubMenu>
      <div className="nav-menu-sub-container">
        <div className="nav-menu-sub-content">
          <div className="nav-menu-sub-column">
            <a href="#" className="nav-menu-sub-column-heading">
              BY SPORT
            </a>
            <ul>
              <li>
                <a href="#">Lifestyle</a>
              </li>
              <li>
                <a href="#">Running</a>
              </li>
              <li>
                <a href="#">Basketball</a>
              </li>
              <li>
                <a href="#">Soccer</a>
              </li>
              <li>
                <a href="#">Training</a>
              </li>
              <li>
                <a href="#">Skateboarding</a>
              </li>
            </ul>
          </div>

          <div className="nav-menu-sub-column">
            <a href="#" className="nav-menu-sub-column-heading">
              F1iD
            </a>
            <ul>
              <li>
                <a href="#">Mens</a>
              </li>
              <li>
                <a href="#">Womens</a>
              </li>
              <li>
                <a href="#">Boys</a>
              </li>
              <li>
                <a href="#">Girls</a>
              </li>
            </ul>
          </div>

          <div className="nav-menu-sub-column">
            <a href="#" className="nav-menu-sub-column-heading">
              BY COLLECTION
            </a>
            <ul>
              <li>
                <a href="#">Classic Chuck Taylor</a>
              </li>
              <li>
                <a href="#">One Star</a>
              </li>
              <li>
                <a href="#">Converse Chuck 70</a>
              </li>
              <li>
                <a href="#">Premium Leather</a>
              </li>
              <li>
                <a href="#">Counter Climate</a>
              </li>
            </ul>
          </div>

          <div className="nav-menu-sub-column">
            <a href="#" className="nav-menu-sub-column-heading">
              SALE
            </a>
            <div>
              <a href="#" className="nav-menu-sub-column-img-wrapper">
                <img src={logo} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledHeaderNavSubMenu>
  )
}

// style
const StyledHeaderNavSubMenu = styled.div`
  display: block;
  width: 100%;
  position: absolute;
  top: calc(100% - 61px);
  left: 0;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;

  .nav-menu-sub-container {
    width: 700px;
    height: 100%;
    margin: 0 auto;
    padding: 30px 0;
  }

  .nav-menu-sub-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    text-align: left;
  }

  .nav-menu-sub-column {
    color: #2f2f2f;

    .nav-menu-sub-column-heading {
      display: inline-block;
      margin-bottom: 15px;

      font-family: 'Oswald', sans-serif;
      font-weight: 500;
      font-size: 1.6rem;
      text-transform: uppercase;
      color: inherit;

      transition: opacity 0.25s;

      &:hover {
        opacity: 0.5;
      }
    }

    > ul > li {
      margin-bottom: 5px;
    }

    > ul > li > a {
      color: inherit;
      font-size: 1.4rem;
      transition: opacity 0.25s;
      line-height: 1.5;

      &:hover {
        opacity: 0.5;
      }
    }

    // image
    .nav-menu-sub-column-img-wrapper {
      display: inline-block;
      width: 200px;
      height: 150px;
      overflow: hidden;
      background: #f5f5f5;
    }
  }
`

export default compose<any, any>()(HeaderNavSubMenu)
