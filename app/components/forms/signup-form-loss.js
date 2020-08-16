import React from 'react'
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ToggleButton,
  ButtonGroup,
} from 'react-bootstrap'

export default function LossInfo(props) {
  return (
    <Container>
      <h5>
        if this next part feels hard you can fill out as much or as little as
        you want and edit your profile later
      </h5>
      <Form>
        <Form.Group as={Col}>
          <Form.Label row="true" sm={2}>
            I lost my...
          </Form.Label>
          <p>
            (select as many as applicable, dealing with multiple losses is
            f***ing real)
          </p>
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

        <Form.Group>
          <Form.Label>their name is...</Form.Label>
          <Form.Control name="lost-name" type="text" placeholder="enter name" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label row="true" sm={2}>
            they died from...
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

        <Form.Group>
          <Form.Label>some dates people should maybe know about...</Form.Label>
          <Form.Group>
            <Form.Label sm={2}>birthday:</Form.Label>
            <Form.Control type="test" placeholder="enter date" />
          </Form.Group>
          <Form.Group>
            <Form.Label sm={2}>deathiversary:</Form.Label>
            <Form.Control type="test" placeholder="enter date" />
          </Form.Group>
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
        <Button variant="outline-info" type="submit" className="btn">
          Next
        </Button>
      </Form>
    </Container>
  )
}
