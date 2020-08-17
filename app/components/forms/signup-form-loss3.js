import React from 'react'
import {Form, Button, Container, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function LossInfo3(props) {
  return (
    <Container>
      <Form>
        <Form.Group as={Col}>
          <Form.Label row="true" sm={2}>
            <h5>they died from...</h5>
          </Form.Label>
          <Form.Check type="checkbox" label="cancer" />
          <Form.Check type="checkbox" label="teminal illness (not cancer)" />
          <Form.Check type="checkbox" label="accident" />
          <Form.Check type="checkbox" label="overdose" />
          <Form.Check type="checkbox" label="unexpected freak problem" />
          <Form.Check type="checkbox" label="murder" />
          <Form.Check type="checkbox" label="suicide" />
          <Form.Check type="checkbox" label="a different shitty reason" />
          <Form.Check type="checkbox" label="prefer not to answer" />
        </Form.Group>
        <br />
        <p>(select as many as applicable)</p>
        <br />
        <Link to="/signup/loss-info2">
          <Button variant="outline-info" type="submit" className="btn">
            back
          </Button>
        </Link>
        <Link to="/signup/loss-info4">
          <Button variant="outline-info" type="submit" className="btn">
            next
          </Button>
        </Link>
      </Form>
    </Container>
  )
}
