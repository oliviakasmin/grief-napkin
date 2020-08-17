import React from 'react'
import {Container, Form, Button, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Help = () => {
  return (
    <Container>
      <h3>I need help...</h3>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <h5>asking for a friend</h5>
            <br />
            <Link to="/need">
              <Button variant="outline-info" type="submit" className="btn">
                great, let's do it
              </Button>
            </Link>
          </Form.Group>
          <Form.Group as={Col}>
            <h5>can I help myself in any way?</h5>
            <br />
            <Link to="/selfcare">
              <Button variant="outline-info" type="submit" className="btn">
                I guess it's worth a shot
              </Button>
            </Link>
          </Form.Group>
        </Form.Row>
      </Form>
    </Container>
  )
}
export default Help
