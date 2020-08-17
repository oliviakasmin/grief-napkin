import React from 'react'
import {Form, Button, Container, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function LossInfo2(props) {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>
            <h5>their name is...</h5>
          </Form.Label>
          <Form.Control name="lost-name" type="text" placeholder="enter name" />
          <br />
          <br />
          <br />
          <Button variant="light" type="submit" className="btn">
            add another name
          </Button>
        </Form.Group>

        <br />

        <br />
        <br />
        <Link to="/signup/loss-info">
          <Button variant="outline-info" type="submit" className="btn">
            back
          </Button>
        </Link>
        <Link to="/signup/loss-info3">
          <Button variant="outline-info" type="submit" className="btn">
            next
          </Button>
        </Link>
      </Form>
    </Container>
  )
}
