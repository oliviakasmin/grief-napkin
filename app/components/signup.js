import React from 'react'
import BasicInfo from './forms/signup-form-basic'
import {Container} from 'react-bootstrap'

const Signup = () => {
  return (
    <Container>
      <main>
        <h4>please answer some questions to get your profile set up</h4>
      </main>
      <BasicInfo />
    </Container>
  )
}
export default Signup
