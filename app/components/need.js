import React from 'react'
import {Container, Form, Button, Col, Row, Toast} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Need = () => {
  return (
    <Container>
      <Form>
        <h4>I need...</h4>
        <Form.Group as={Col}>
          <Form.Check
            type="checkbox"
            label="I don't even know, but definitely something"
          />
          <Form.Check type="checkbox" label="toilet paper" />
          <Form.Check type="checkbox" label="meals prepared and served to me" />
          <Form.Check type="checkbox" label="laundry" />
          <Form.Check type="checkbox" label="pharmacy run" />
          <Form.Check type="checkbox" label="peronsal admin work" />
          <Form.Check type="checkbox" label="groceries" />
          <br />
          <Form.Control placeholder="list whatever else you need here" />
        </Form.Group>
        <br />

        <Button variant="outline-info" type="submit" className="btn">
          send to my core crew
        </Button>

        <Link to="/friends">
          <Button variant="outline-info" type="submit" className="btn">
            send to my larger circle
          </Button>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <h4>I want...</h4>

        <Form.Group>
          <Form.Label row="true" sm={2}>
            <h5>recomendations</h5>
          </Form.Label>
          <Form.Check type="checkbox" label="books" />
          <Form.Check type="checkbox" label="movies" />
          <Form.Check type="checkbox" label="meals prepared and served to me" />
          <Form.Check type="checkbox" label="restaurants" />
          <br />

          <Form.Control placeholder="list whatever you want here" />
        </Form.Group>

        <Form.Group>
          <Form.Label row="true" sm={2}>
            <h5>to stay home and</h5>
          </Form.Label>
          <Form.Check type="checkbox" label="lay on the couch with company" />
          <Form.Check
            type="checkbox"
            label="company but please don't talk to me"
          />
          <Form.Check type="checkbox" label="some fun indoor activities" />
          <Form.Check type="checkbox" label="restaurants" />
          <br />
          <Form.Control placeholder="list whatever you want here" />
        </Form.Group>

        <Form.Group>
          <Form.Label row="true" sm={2}>
            <h5>to go out and</h5>
          </Form.Label>
          <Form.Check type="checkbox" label="a small outing could be nice" />
          <Form.Check
            type="checkbox"
            label="maybe let's check out a new restaurant"
          />

          <Form.Check type="checkbox" label="do something crazy" />
          <Form.Check type="checkbox" label="surprise me!" />
          <Form.Check type="checkbox" label="some outdoor activities" />
          <br />

          <Form.Control placeholder="list whatever you want here" />
        </Form.Group>

        <br />
        <Link to="/friends">
          <Button variant="outline-info" type="submit" className="btn">
            send to my core crew
          </Button>
        </Link>
        <Link to="/friends">
          <Button variant="outline-info" type="submit" className="btn">
            send to my larger circle
          </Button>
        </Link>
      </Form>
    </Container>
  )
}
export default Need
