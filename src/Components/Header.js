import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { ThemeButton } from './ThemeButton'

const Header = () => {
    return (
        <div>
            <div>
      <Navbar bg="info" variant="light">
        <Container>
          <Navbar.Brand href="/">NewsRoom</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/headlines">Headlines</Nav.Link>
            <Nav.Link href="/tellus">Tell Us</Nav.Link>
          </Nav>
        </Container>
        <ThemeButton/>
      </Navbar>
    </div>
        </div>
    )
}

export default Header
