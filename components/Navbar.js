import {Nav, Navbar, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import Link from 'next/link'
import { memo, useContext } from 'react'
import Dark from '../context/Dark'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faCompass, faFire, faMusic, faGamepad, faNewspaper, faFilm, faTrophy, faTools } from '@fortawesome/free-solid-svg-icons'
import {useRouter } from 'next/router'


function NavBar () {
  const router = useRouter()
  const DarkMode = useContext(Dark)

    return (
        <Navbar fixed="top"  variant={DarkMode ? "dark" : "light"} bg={DarkMode ? "dark" : "light"} expand="lg">
        <Link href="/"><Navbar.Brand href="/"><img width="40" height="40" alt="logo" src="/logo.svg"/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/"><Nav.Link className={router.pathname == '/' ? "active" : ""} href="/"><FontAwesomeIcon size={'1x'} icon={faHome}/> Home</Nav.Link></Link>
            
            <NavDropdown title="To Explore" id="basic-nav-dropdown">
            {/* <FontAwesomeIcon size={'1x'} icon={faCompass}/> */}
              <Link href="/category/on-the-rise"><NavDropdown.Item className={router.pathname == '/category/on-the-rise' ? "active" : ""} href="/category/on-the-rise"> <FontAwesomeIcon size={'1x'} icon={faFire}/>  On The Rise</NavDropdown.Item></Link>
              <Link href="/category/music"><NavDropdown.Item className={router.pathname == '/category/music' ? "active" : ""} href="/category/music"> <FontAwesomeIcon size={'1x'} icon={faMusic}/>  Music</NavDropdown.Item></Link>
              <Link href="/category/games"><NavDropdown.Item className={router.pathname == '/category/games' ? "active" : ""} href="/category/games"><FontAwesomeIcon size={'1x'} icon={faGamepad}/> Games</NavDropdown.Item></Link>
              <Link href="/category/news"><NavDropdown.Item className={router.pathname == '/category/news' ? "active" : ""} href="/category/news"><FontAwesomeIcon size={'1x'} icon={faNewspaper}/> News</NavDropdown.Item></Link>
              <Link href="/category/films"><NavDropdown.Item className={router.pathname == '/category/films' ? "active" : ""} href="/category/films"><FontAwesomeIcon size={'1x'} icon={faFilm}/> Films</NavDropdown.Item></Link>
              <Link href="/category/sports"><NavDropdown.Item className={router.pathname == '/category/sports' ? "active" : ""} href="/category/sports"><FontAwesomeIcon size={'1x'} icon={faTrophy}/> Sports</NavDropdown.Item></Link>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <Link href="/settings"><Nav.Link className={router.pathname == '/settings' ? "active" : ""} href="/settings"><FontAwesomeIcon icon={faTools} size={'1x'}/> Settings</Nav.Link></Link>
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