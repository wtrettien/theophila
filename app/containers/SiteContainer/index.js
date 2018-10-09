
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Navbar, Nav, NavItem } from 'react-bootstrap'
import cc from '../../images/cc.svg'
import by from '../../images/by.svg'
import title from '../../images/theophila.png'
import structure from '../../images/structure.png'
import about from '../../images/about.png'
import read from '../../images/read.png'


export default class SiteContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="page-container">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <NavItem componentClass={Link} to="/" href="/">
                <img src={title} width="200" alt="Portrait of Benlowes" /> 
              </NavItem></Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem componentClass={Link} to="/reader" href="/reader">
                <img src={read} height="30" alt="Read" /> 
            </NavItem>
            <NavItem componentClass={Link} to="/structure" href="/structure">
                <img src={structure} height="30" alt="Structure" /> 
            </NavItem>
            <NavItem componentClass={Link} to="/about" href="/about">
                <img src={about} height="30" alt="About" /> 
            </NavItem>
          </Nav>

        </Navbar>
        {this.props.children}

        <footer>
          This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International License</a> <img src={cc} alt="Creative Commons" style={{ height: '2em' }} />
          <img src={by} alt="Attribution" style={{ height: '2em' }} />

        </footer>

      </div>
    )
  }
}

SiteContainer.propTypes = {
  children: PropTypes.any,
}
