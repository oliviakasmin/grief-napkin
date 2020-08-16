import React from 'react'
import {Container, Accordion, Card, Button} from 'react-bootstrap'
import Emoji from 'react-emoji-render'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <Container>
      <h5>how are you today?</h5>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h2>
              <Emoji text=":upside_down_face:" />
            </h2>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Smile />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h2>
              <Emoji text=":neutral_face: " />
            </h2>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Eh />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <h2>
              <Emoji text=":expressionless: " />
            </h2>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Bad />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <ContactFriend />
    </Container>
  )
}
export default Welcome

const Smile = () => {
  return (
    <Container>
      <p>I'm thriving (all things considered...)</p>
      <p>today is a pretty good day</p>
      <p>I got this</p>
      <p>I'm a hot mess and I'm rolling with it</p>
      <p>Feeling great and ready for some fun</p>
    </Container>
  )
}
const Eh = () => {
  return (
    <Container>
      <p>okay, just want to be alone</p>
      <p>oh you know, trudging on</p>
      <p>life sucks, but I'm "ok"</p>
      <p>this is hard, but I got dressed!</p>
      <p>okay, and I could really use some company</p>
    </Container>
  )
}

const Bad = () => {
  return (
    <Container>
      <p>this feels like too much</p>
      <p>don't want to get out of bed</p>
      <p>I have to do something super shitty today</p>
      <p>what's even the point</p>
      <p>could really use some suport right about now</p>
    </Container>
  )
}

const ContactFriend = () => {
  return (
    <Container>
      <p>want to ping a friend?</p>
      <p>yeah, okay</p>
      <Link className="nav-link" to="/friends">
        click here for your friends
      </Link>
      <p>nah</p>
    </Container>
  )
}
