import * as React from 'react'
import compose from 'recompose/compose'

import logo from '@/static/images/logo.png'

import './Header.css'

// component
export const HeaderComponent = (): JSX.Element => {
  return (
    <header>
      <nav>
        <div className="nav-bar">
          <ul className="nav-bar-account-info">
            <li>
              <a href="#">
                <i className="fa fa-user-circle" aria-hidden="true" />
                <span>My Account</span>
              </a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>

        <div className="nav-menu">
          <div className="container">
            <div className="logo" />

            <ul className="nav-menu-list">
              <li className="nav-menu-list-item men">
                <a href="#">men</a>
                <div className="nav-menu-sub">
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
                          <a
                            href="#"
                            className="nav-menu-sub-column-img-wrapper"
                          >
                            <img src={logo} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">women</a>
              </li>
              <li>
                <a href="#">boys</a>
              </li>
              <li>
                <a href="#">girls</a>
              </li>
              <li>
                <a href="#">customize</a>
              </li>
            </ul>
            <div className="search-wrapper">
              <i className="fa fa-search" aria-hidden="true" />
              <form>
                <input
                  type="search"
                  className="input search"
                  value=""
                  placeholder="Search for"
                />
                <input type="submit" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className="banner">
        <div className="banner-container">
          <div className="arrow arrow-let">
            <i className="fa fa-angle-left" aria-hidden="true" />
          </div>
          <div className="banner-content">
            <p>
              Shoes, Clothes on Big Sale! <a href="#">Check it out</a>
            </p>
          </div>
          <div className="arrow arrow-right">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </div>
        </div>
      </div>
    </header>
  )
}

// class
export const enhance = compose<any, any>()
export const HeaderComponentEnhanced = enhance(HeaderComponent)
export default class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return <HeaderComponentEnhanced {...this.props} />
  }
}
