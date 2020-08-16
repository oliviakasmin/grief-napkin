import React from 'react'
import BasicInfo from './forms/signup-form-basic'
import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <Container>
      <main>
        <h4>please answer some questions to get your profile set up</h4>
      </main>
      <BasicInfo />
      <Link to="/signup/loss-info">
        <Button variant="outline-info" type="submit" className="btn">
          Next
        </Button>
      </Link>
      <h5>
        the next part includes 4 quick questions that might be hard, you can
        skip as much as you want and finish your profile later
      </h5>
    </Container>
  )
}
export default Signup
