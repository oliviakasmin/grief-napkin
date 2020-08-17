import React from 'react'
import {Form, Button, Container, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function LossInfo4(props) {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>
            <h5>some dates people should maybe know about...</h5>
          </Form.Label>
          <br />
          <Form.Group>
            <Form.Label sm={2}>birthday:</Form.Label>
            <Form.Control type="test" placeholder="enter date" />
          </Form.Group>
          <Form.Group>
            <Form.Label sm={2}>deathiversary:</Form.Label>
            <Form.Control type="test" placeholder="enter date" />
          </Form.Group>
          <br />
          <br />
          <Form.Group>
            <Form.Label sm={2}>special occasion:</Form.Label>
            <Form.Control type="test" placeholder="enter name" />
            <Form.Control type="test" placeholder="enter date" />
          </Form.Group>
          <Form.Group>
            <Form.Label sm={2}>other:</Form.Label>
            <Form.Control type="test" placeholder="enter name" />
            <Form.Control type="test" placeholder="enter date" />
          </Form.Group>
        </Form.Group>
        <br />
        <br />
        <Link to="/signup/loss-info3">
          <Button variant="outline-info" type="submit" className="btn">
            back
          </Button>
        </Link>
        <Link to="/signup/activities">
          <Button variant="outline-info" type="submit" className="btn">
            let's move on from these shitty questions
          </Button>
        </Link>
      </Form>
    </Container>
  )
}
