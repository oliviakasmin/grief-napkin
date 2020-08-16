import React from 'react'
import {Form, Button} from 'react-bootstrap'
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
    <Form className="form">
      <Form.Group as={Col}>
        <Form.Label row="true" sm={2}>
          when I still enjoyed doing things, I liked...
        </Form.Label>
      </Form.Group>
    </Form>
  )
}
