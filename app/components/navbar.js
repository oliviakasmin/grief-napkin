import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const HomeNavbar = () => {
  return (
    <Navbar bg="light" variant="light" className="nav">
      <Navbar.Brand href="/" className="home-nav">
        grief napkin
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="/stuck" className="nav-link">
          i'm stuck
        </Nav.Link>
        <NavDropdown title="my stuff" id="basic-nav-dropdown">
          <NavDropdown.Item href="/help">I need / want</NavDropdown.Item>
          <NavDropdown.Item href="/friends">friends</NavDropdown.Item>
          <NavDropdown.Item href="/activities">activities</NavDropdown.Item>
          <NavDropdown.Item href="/journal">journal</NavDropdown.Item>
          <NavDropdown.Item href="/resources">resources</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/username:oliviak">
            my profile
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="/login" className="nav-link">
          login
        </Nav.Link>
        <Nav.Link href="/signup" className="nav-link">
          signup
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default HomeNavbar
