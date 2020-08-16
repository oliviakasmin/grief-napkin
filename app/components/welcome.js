import React from 'react'
import {Container, Accordion, Card, Button} from 'react-bootstrap'
import Emoji from 'react-emoji-render'
import {Link} from 'react-router-dom'
import {DailyCheckForm} from './index.js'

const Welcome = () => {
  return (
    <Container>
      <h5>how are you today?</h5>
      <DailyCheckForm />
      <ContactFriend />
    </Container>
  )
}
export default Welcome

const ContactFriend = () => {
  return (
    <Container>
      <p></p>
      <p>want to share how you're feeling with your core crew today?</p>
      <Link to="/">
        <Button size="sm" variant="outline-info" type="submit" className="btn">
          yeah, okay
        </Button>
      </Link>
      <Link to="/">
        <Button size="sm" variant="outline-info" type="submit" className="btn">
          nah
        </Button>
      </Link>

      <p></p>
      <p>want to ping a friend?</p>
      <Link to="/friends">
        <Button size="sm" variant="outline-info" type="submit" className="btn">
          yeah, okay
        </Button>
      </Link>
      <Link to="/">
        <Button size="sm" variant="outline-info" type="submit" className="btn">
          nah
        </Button>
      </Link>
    </Container>
  )
}
