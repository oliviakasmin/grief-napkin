import React from 'react'
import {Container, Form, Button, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const SelfCare = () => {
  return (
    <Container>
      <h3>These ideas may be a good start...</h3>
      <br />
      <h5>
        <ul>
          <li>maybe some fresh air?</li> <br />
          <li>did I eat today?</li> <br />
          <li>maybe I could each out to a friend?</li> <br />
          <li>maybe I'll try something that I enjoy</li> <br />
        </ul>
      </h5>
      <br />
      <Link to="/need">
        <Button variant="outline-info" type="submit" className="btn">
          jk, I def need a friend's help rn
        </Button>
      </Link>

      <br />
      <br />
      <br />

      <Link to="/activities">
        <Button variant="outline-info" type="submit" className="btn">
          my activities
        </Button>
      </Link>

      <Link to="/friends">
        <Button variant="outline-info" type="submit" className="btn">
          my friends
        </Button>
      </Link>
    </Container>
  )
}
export default SelfCare
