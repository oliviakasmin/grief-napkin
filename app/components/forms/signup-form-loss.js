import React from 'react'
import {Form, Button, Container, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function LossInfo(props) {
  return (
    <Container>
      <Form>
        <Form.Group as={Col}>
          <Form.Label row="true" sm={2}>
            <h5>I lost my...</h5>
          </Form.Label>

          <Form.Check type="checkbox" label="partner" />
          <Form.Check type="checkbox" label="friend" />
          <Form.Check type="checkbox" label="parent" />
          <Form.Check type="checkbox" label="grandparent" />
          <Form.Check type="checkbox" label="sibling" />
          <Form.Check type="checkbox" label="twin" />
          <Form.Check type="checkbox" label="someone I loved" />
          <Form.Check type="checkbox" label="acquantaince" />
          <Form.Check type="checkbox" label="prefer not to answer" />
        </Form.Group>
        <br />
        <p>
          (select as many as applicable, dealing with multiple losses is f***ing
          real)
        </p>
        <br />
        <Link to="/signup/">
          <Button variant="outline-info" type="submit" className="btn">
            back
          </Button>
        </Link>
        <Link to="/signup/loss-info2">
          <Button variant="outline-info" type="submit" className="btn">
            next
          </Button>
        </Link>
      </Form>
    </Container>
  )
}
