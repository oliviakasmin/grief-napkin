import React from 'react'
import {Container, Image, Col, Row, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Stuck = () => {
  return (
    <Container>
      <h3>here's some stuff that might help</h3>
      <br />
      <br />
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://i.redd.it/odwkyhkhhf121.jpg" rounded fluid />
        </Col>

        <Col>
          <p>want to get some thoughts down on "paper"?</p>
          <Link to="/journal">
            <Button
              size="sm"
              variant="outline-info"
              type="submit"
              className="btn"
            >
              I guess
            </Button>
          </Link>
        </Col>
      </Row>

      <br />
      <br />
      <Row>
        <Col xs={6} md={4}>
          <Image
            src=" https://i.huffpost.com/gen/1249055/thumbs/o-MANATEE-570.jpg?1"
            rounded
            fluid
          />
        </Col>

        <Col>
          <p>want to ping a friend?</p>
          <Link to="/friends">
            <Button
              size="sm"
              variant="outline-info"
              type="submit"
              className="btn"
            >
              yeah, okay
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
export default Stuck
