import Layout from '../components/Layout'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import {useContext} from 'react'
import { useRouter} from 'next/router'
import Dark from '../context/Dark'

export default function Settings () {
    const DarkMode = useContext(Dark)
    const router = useRouter()

    function AddThemeDark () {
        if(typeof window != 'undefined') {
            localStorage.setItem('darkMode', true)
            router.reload()
        }
    }

    function RemoveDarkTheme () {
        if(typeof window != 'undefined') {
            localStorage.removeItem('darkMode')
            router.reload()
        }
    }
    return (
        <Layout title="Settings">
        <Container>
        <Row>
    <Col sm></Col>
    <Col sm>
        {DarkMode ?
        <Button onClick={RemoveDarkTheme} variant="light"><FontAwesomeIcon icon={faAdjust} size="1x"/> Clear Theme</Button> :
        <Button onClick={AddThemeDark} variant="dark"><FontAwesomeIcon icon={faAdjust} size="1x"/> Dark Theme</Button>}
    </Col>
    <Col sm></Col>
  </Row>
        </Container>
        </Layout>
    )
}