import Layout from '../../components/Layout'
import { useState, memo } from 'react'
import { Form, Button} from 'react-bootstrap'
import Link from 'next/link'
import Dark from '../../context/Dark'

function Login () {
    const DarkMode = useContext(Dark)
    const [ Email, setEmail] = useState('')
    const [ Password, setPassword] = useState('')

    return (
        <Layout title="Log In">
                    <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required/>
            <Link href="/auth/signup"><p style={{cursor: 'pointer'}}  className={DarkMode ? "text-white " : "text-dark"}>Don't have an account?</p></Link>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
            <Link href="/auth/redefine-password"><p style={{cursor: 'pointer'}}  className={DarkMode ? "text-white " : "text-dark"}>Forgot your password?</p></Link>
        </Form.Group>

        <Button variant="primary" type="button">
            Submit
        </Button>
        </Form>
        </Layout>
    )
}

export default memo(Login)