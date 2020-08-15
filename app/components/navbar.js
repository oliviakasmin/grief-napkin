import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

const HomeNavbar = () => {
  return (
    <Navbar bg="light" variant="light" className="nav">
      <Navbar.Brand href="/" className="home-nav">
        grief napkin
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="/resources" className="nav-link">
          resources
        </Nav.Link>
        <Nav.Link href="/signup" className="nav-link">
          signup
        </Nav.Link>
        <Nav.Link href="/journal" className="nav-link">
          journal
        </Nav.Link>
        <Nav.Link href="/welcome" className="nav-link">
          welcome
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default HomeNavbar
