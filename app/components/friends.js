import React from 'react'
import {Container} from 'react-bootstrap'

const Friends = () => {
  return (
    <Container>
      <main>
        <h5>want to message someone in your core crew?</h5>
        <CoreCrew />
        <h5>want to message someone in your larger cirlce of friends?</h5>
        <LargerCircle />
      </main>
    </Container>
  )
}

export default Friends

const CoreCrew = () => {
  return (
    <Container>
      <p>list of your core crew friends here</p>
    </Container>
  )
}

const LargerCircle = () => {
  return (
    <Container>
      <p>list of your larger cirlce of friends here</p>
    </Container>
  )
}
