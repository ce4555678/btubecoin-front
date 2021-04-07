import Layout from '../../components/Layout'
import { useState, memo, useContext } from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import Link from 'next/link'
import Dark from '../../context/Dark'
import firebase from '../../utils/firebase'
import 'firebase/auth'

function Login () {
    const DarkMode = useContext(Dark)
    const [ Email, setEmail] = useState('')
    const [ Password, setPassword] = useState('')

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

    return (
        <Layout title="Log In">
                    <Row>
            <Col sm></Col>
            <Col xs={12} md={7} sm={9}>
            <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className={DarkMode ? "text-white" : ""} >Email address</Form.Label>
            <Form.Control className={DarkMode ? "text-white bg-dark " : ""} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" required/>
            <Link href="/auth/signup"><p style={{cursor: 'pointer', marginLeft: '77.7%'}}  className={DarkMode ? "text-white " : "text-dark"}>Don't have an account?</p></Link>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label className={DarkMode ? "text-white" : ""}>Password</Form.Label>
            <Form.Control className={DarkMode ? "text-white bg-dark " : ""} onChange={(e) => setPassword(e.target.value)} type="password" required/>
            <Link href="/auth/redefine-password"><p style={{cursor: 'pointer', marginLeft: '77.7%'}}  className={DarkMode ? "text-white " : "text-dark"}>Forgot your password?</p></Link>
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
            </Col>
            <Col></Col>
            </Row>
        </Layout>
    )
}

export default memo(Login)