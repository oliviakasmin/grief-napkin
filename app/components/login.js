import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Login(props) {
  return (
    <Form className="form">
      <Form.Group>
        <Form.Label>email</Form.Label>
        <Form.Control type="email" size="sm" placeholder="enter email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>password</Form.Label>
        <Form.Control type="password" size="sm" placeholder="enter password" />
      </Form.Group>
      <Link to="/welcome">
        <Button variant="outline-info" type="submit" className="btn">
          login
        </Button>
      </Link>
    </Form>
  )
}
