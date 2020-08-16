import React from 'react'
import {Form, Button, Col, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const sampleActivities = [
  'reading',
  'watching movies',
  'exercising',
  'making art',
  'going to restaurants',
  'hanging with friends',
  'outdoor activities',
]

export default function ActivitiesForm(props) {
  return (
    <Container>
      <Form className="form">
        <Form.Group as={Col}>
          <Form.Label row="true" sm={2}>
            when I still enjoyed doing things, I liked...
          </Form.Label>
          {sampleActivities.map((activity) => (
            <Form.Check key={activity} type="checkbox" label={activity} />
          ))}
        </Form.Group>
        <Link to="/signup/loss-info">
          <Button variant="outline-info" type="submit" className="btn">
            back
          </Button>
        </Link>
      </Form>
    </Container>
  )
}
