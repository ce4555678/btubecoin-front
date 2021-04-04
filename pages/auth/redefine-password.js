import Layout from '../../components/Layout'
import { useState, memo } from 'react'
import { Form, Button} from 'react-bootstrap'
import Dark from '../../context/Dark'


function RedefinePassword () {
    const [ Email, setEmail] = useState('')
    const DarkMode = useContext(Dark)


    return (
        <Layout title="Redefine Password">
            <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" required/>
        </Form.Group>
        <Button variant="primary" type="button">
            Submit
        </Button>
        </Form>
        </Layout>
    )
}

export default memo(RedefinePassword)