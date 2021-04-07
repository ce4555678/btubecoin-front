import Layout from '../../components/Layout'
import { useState, memo, useContext } from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import Dark from '../../context/Dark'
import Link from 'next/link'

function SignUp () {
    const [ Email, setEmail] = useState('')
    const [ FirstName, setFirstName] = useState('')
    const [ LastName, setLastName] = useState('')
    const [ PasswordAgain, setPasswordAgain] = useState('')
    const [ Password, setPassword] = useState('')
    const [ Birth, setBirth] = useState('')
    const DarkMode = useContext(Dark)

    return (
        <Layout title="Sign Up">
        <Row>
            <Col sm></Col>
            <Col xs={12} md={7} sm={9}>
            <Form>
        <Form.Group controlId="formBasicFirstName">
            <Form.Label className={DarkMode ? "text-white" : ""}>First Name</Form.Label>
            <Form.Control className={DarkMode ? "text-white bg-dark " : ""} onChange={(e) => setFirstName(e.target.value)} type="text" required/>
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
            <Form.Label className={DarkMode ? "text-white" : ""}>Last Name</Form.Label>
            <Form.Control className={DarkMode ? "text-white bg-dark " : ""} onChange={(e) => setLastName(e.target.value)} type="text" required/>
        </Form.Group>

        <Form.Group controlId="formBasicBirth">
            <Form.Label className={DarkMode ? "text-white" : ""} >Birth Date</Form.Label>
            <Form.Control className={DarkMode ? "text-white bg-dark " : ""} onChange={(e) => setBirth(e.target.value)} type="date" required/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label className={DarkMode ? "text-white" : ""} >Email address</Form.Label>
            <Form.Control className={DarkMode ? "text-white bg-dark " : ""} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" required/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label className={DarkMode ? "text-white" : ""}>Password</Form.Label>
            <Form.Control className={DarkMode ? "text-white bg-dark " : ""} onChange={(e) => setEmail(e.target.value)} type="password"  required/>
        </Form.Group>

        <Form.Group controlId="formBasicPasswordAgain">
            <Form.Label className={DarkMode ? "text-white" : "" }>Password Again</Form.Label>
            <Form.Control className={DarkMode ? "text-white bg-dark " : ""} onChange={(e) => setPasswordAgain(e.target.value)} type="password" required/>
            <Link href="/auth/login"><p style={{cursor: 'pointer', marginLeft: '75.7%'}}  className={DarkMode ? "text-white " : "text-dark"}>already have an account?</p></Link>
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

export default memo(SignUp)