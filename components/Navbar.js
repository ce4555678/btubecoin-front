import {Nav, Navbar, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import Link from 'next/link'
import { memo, useContext } from 'react'
import Dark from '../context/Dark'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import {useRouter } from 'next/router'


function NavBar () {
  const router = useRouter()
  const DarkMode = useContext(Dark)

    return (
        <Navbar variant={DarkMode ? "dark" : "light"} bg={DarkMode ? "dark" : "light"} expand="lg">
        <Link href="/"><Navbar.Brand href="/"><img width="40" height="40" alt="logo" src="/logo.svg"/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/"><Nav.Link href="/"><FontAwesomeIcon size={'1x'} icon={faHome}/> Home</Nav.Link></Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className={DarkMode ? "mr-sm-2 bg-dark text-white text-center border-1" : "mr-sm-2 text-center border-1"} />
            <Button className="border-1" variant={DarkMode ? "secondary": "secondary"}><FontAwesomeIcon size={'1x'} icon={faSearch}/></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default memo(NavBar)