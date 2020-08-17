import React from 'react'
import BasicInfo from './forms/signup-form-basic'
import {Container, Button, Form, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <Container>
      <h4>please answer some questions to get your profile set up</h4>
      <br />
      <Form></Form>
      <BasicInfo />
    </Container>
  )
}
export default Signup
