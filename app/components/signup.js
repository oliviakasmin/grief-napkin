import React from 'react'
import SignupForm from './forms/signup-form'
import {Container} from 'react-bootstrap'

const Signup = () => {
  return (
    <Container>
      <main>
        <h4>please answer some questions to get your profile set up</h4>
      </main>
      <SignupForm />
    </Container>
  )
}
export default Signup
