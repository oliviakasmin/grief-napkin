import React from 'react'
import {Container} from 'react-bootstrap'

const Friends = () => {
  return (
    <Container>
      <h5>your friends and people</h5>
      <ul>
        <li>
          <CoreCrew />
        </li>
        <li>
          <LargerCircle />
        </li>
      </ul>
      <br />
      <br />
      <br />
      <p>invite a friend to join</p>
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
