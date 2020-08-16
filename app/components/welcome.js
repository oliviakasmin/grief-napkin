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
      <p>want to ping a friend?</p>
      <p>yeah, okay</p>
      <Link className="nav-link" to="/friends">
        click here for your friends
      </Link>
      <p>nah</p>
    </Container>
  )
}
