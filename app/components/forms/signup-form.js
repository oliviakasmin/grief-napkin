import React from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

export default function SignupForm(props) {
  return (
    <Container>
      <h5>required</h5>
      <BasicInfo />
      <p />
      <h5>
        if this part feels too hard you can always edit your profile later
      </h5>
      <LossInfo />
      <Button variant="outline-primary" type="submit" className="btn">
        Submit
      </Button>
    </Container>
  )
}

function BasicInfo(props) {
  return (
    <Form className="form">
      <Form.Group>
        <Form.Label>first name </Form.Label>
        <Form.Control
          name="firstname"
          type="text"
          placeholder="enter first name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>last name </Form.Label>
        <Form.Control
          name="lastname"
          type="text"
          placeholder="enter last name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="enter email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="enter password" />
      </Form.Group>
    </Form>
  )
}

function LossInfo(props) {
  return (
    <Form>
      <Form.Group as={Col}>
        <Form.Label as="legend" column sm={2}>
          I lost my...
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

      <Form.Group>
        <Form.Label>their name is...</Form.Label>
        <Form.Control name="lost-name" type="text" placeholder="" />
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label as="legend" column sm={2}>
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
    </Form>
  )
}
