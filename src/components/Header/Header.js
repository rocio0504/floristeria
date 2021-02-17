import React, { useState, useEffect } from 'react'
import styles from './Header.module.scss'
import cx from 'classnames'
import { withRouter, Link } from 'react-router'
import MenuIcon from '@material-ui/icons/Menu'
import { Fade } from '@material-ui/core'

const Header = (props) => {
  const [isNavVisible, setNavVisibility] = useState(false)

  const toggleNav = () => {
    setNavVisibility(!isNavVisible)
  }

  const navItems = [
  {
    name: 'Home',
    path: '/'
  }
  ]

  const pathname = props.location.pathname
  const closeMobileMenu = () => {
    setNavVisibility(false)
  }

  const overlay = () => {
    return isNavVisible && (
      <div
        className={styles.overlay}
        onClick={closeMobileMenu}
      />
    )
  }

  return (
    <div className={styles.component}>
        <div className={styles.content}>
          <div>
            <Link to="/" className={styles.logoWrapper}>
              <img className={styles.logoImage} src='./logo.png' alt='logo'/>
              <p className={styles.logoText} >Floristería Dulces Pétalos</p>
            </Link>
          </div>
          <div className={styles.nav}>
            {navItems.map((item, index) => {
                const isActive = pathname === item.path

                return (
                  <nav
                    key={index}
                    className={cx(styles.navItem, {
                      [styles.activeNavItem]: isActive
                    })}
                  >
                    <Link to={item.path} className={styles.logoWrapper} >
                      {item.name}
                    </Link>
                  </nav>
                )
              })}
          </div>

          <div className={styles.mobileNav}>
            <MenuIcon
              className={styles.menuIcon}
              onClick={toggleNav}
            />
            <div className={styles.mobileMenu}>
                {overlay()}
                <Fade in={isNavVisible}>
                  <div className={cx(styles.mobileMenuContent, {[styles.mobileMenuContentClose]: !isNavVisible})}>
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.path

                        return (
                          <div
                            key={index}
                            className={cx(styles.mobileNavItem, {
                              [styles.activeMobileNavItem]: isActive
                            })}
                          >
                            <Link to={item.path} className={styles.mobileNavLink} >
                              {item.name}
                            </Link>
                          </div>
                        )
                      })}
                  </div>
                </Fade>
              </div>
            </div>
        </div>
     </div>
  )
}

export default withRouter(Header)
