import Layout from '../../components/Layout'
import { useState, memo } from 'react'
import { Form, Button} from 'react-bootstrap'

function RedefinePassword () {
    const [ Email, setEmail] = useState('')

    return (
        <Layout title="Redefine Password">
            <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="button">
            Submit
        </Button>
        </Form>
        </Layout>
    )
}

export default memo(RedefinePassword)