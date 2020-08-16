import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function BasicInfo(props) {
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
      <p>(these fields are required)</p>
      <Button variant="outline-info" type="submit" className="btn">
        <Link to="/signup/loss-info">Next</Link>
      </Button>
    </Form>
  )
}
