import {Nav, Navbar, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import Link from 'next/link'
import { memo, useContext, useState } from 'react'
import Dark from '../context/Dark'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faCompass, faFire, faMusic, faGamepad, faNewspaper, faFilm, faTrophy, faTools } from '@fortawesome/free-solid-svg-icons'
import {useRouter } from 'next/router'
import i18n from '../translate/i18n' 

function NavBar () {
  const router = useRouter()
  const DarkMode = useContext(Dark)
  const [ TextSearch, setTextSearch ] = useState('')

    return (
        <Navbar fixed="top"  variant={DarkMode ? "dark" : "light"} bg={DarkMode ? "dark" : "light"} expand="lg">
        <Link href="/"><Navbar.Brand href="/"><img width="40" height="40" alt="logo" src="/logo.svg"/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/"><Nav.Link className={router.pathname == '/' ? "active" : ""} href="/"><FontAwesomeIcon size={'1x'} icon={faHome}/> {i18n.t('navbar.menu.home')}</Nav.Link></Link>
            
            <NavDropdown title={i18n.t('navbar.menu.toExplorer')} id="basic-nav-dropdown">
            {/* <FontAwesomeIcon size={'1x'} icon={faCompass}/> */}
              <Link href="/category/music"><NavDropdown.Item className={router.pathname == '/category/music' ? "active" : ""} href="/category/music"> <FontAwesomeIcon size={'1x'} icon={faMusic}/>  {i18n.t('navbar.menu.dropdown.music')}</NavDropdown.Item></Link>
              <Link href="/category/games"><NavDropdown.Item className={router.pathname == '/category/games' ? "active" : ""} href="/category/games"><FontAwesomeIcon size={'1x'} icon={faGamepad}/> {i18n.t('navbar.menu.dropdown.games')}</NavDropdown.Item></Link>
              <Link href="/category/news"><NavDropdown.Item className={router.pathname == '/category/news' ? "active" : ""} href="/category/news"><FontAwesomeIcon size={'1x'} icon={faNewspaper}/> {i18n.t('navbar.menu.dropdown.news')}</NavDropdown.Item></Link>
              <Link href="/category/films"><NavDropdown.Item className={router.pathname == '/category/films' ? "active" : ""} href="/category/films"><FontAwesomeIcon size={'1x'} icon={faFilm}/> {i18n.t('navbar.menu.dropdown.films')}</NavDropdown.Item></Link>
              <Link href="/category/sports"><NavDropdown.Item className={router.pathname == '/category/sports' ? "active" : ""} href="/category/sports"><FontAwesomeIcon size={'1x'} icon={faTrophy}/> {i18n.t('navbar.menu.dropdown.sports')}</NavDropdown.Item></Link>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <Link href="/settings"><Nav.Link className={router.pathname == '/settings' ? "active" : ""} href="/settings"><FontAwesomeIcon icon={faTools} size={'1x'}/> {i18n.t('navbar.menu.settings')}</Nav.Link></Link>
          </Nav>
          <Form inline>
            <FormControl onChange={(e) => setTextSearch(e.target.value)} type="text" placeholder={i18n.t('navbar.menu.searchPlaceholder')} className={DarkMode ? "mr-sm-1 bg-dark text-white text-center border-1" : "mr-sm-1 text-center border-1"} />
            <Button className="border-1" variant={DarkMode ? "secondary": "secondary"}><FontAwesomeIcon size={'1x'} icon={faSearch}/></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default memo(NavBar)