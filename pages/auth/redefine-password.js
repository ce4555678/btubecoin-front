import Layout from '../../components/Layout'
import { useState, memo, useContext } from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import Dark from '../../context/Dark'


function RedefinePassword () {
    const [ Email, setEmail] = useState('')
    const DarkMode = useContext(Dark)


    return (
        <Layout title="Redefine Password">
                <Row>
                <Col sm></Col>
                <Col xs={12} md={7} sm={9}>
                    <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className={DarkMode ? "text-white" : ""}>Email address</Form.Label>
                    <Form.Control className={DarkMode ? "text-white bg-dark " : ""} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" required/>
                </Form.Group>
                <Button variant="primary" type="button">
                    Submit
                </Button>
                </Form>
                </Col>
                <Col></Col>
                </Row>
            
        </Layout>
    )
}

export default memo(RedefinePassword)