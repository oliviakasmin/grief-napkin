import {Modal, Button, Container, Form, Col} from 'react-bootstrap'
import React from 'react'
import Emoji from 'react-emoji-render'
import {Link} from 'react-router-dom'

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>
            <Emoji text=":expressionless:" />
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Bad />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-info" onClick={props.onHide}>
          share
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const BadModal = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <Container>
      <>
        <Button variant="link" onClick={() => setModalShow(true)}>
          <h1>
            <Emoji text=":expressionless:" />
          </h1>
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </Container>
  )
}

export default BadModal

const Bad = () => {
  const badChoices = [
    'this feels like too much',
    'dont want to get out of bed',
    'I have to do something super shitty today',
    'whats even the point',
    'could really use some support right about now',
  ]
  return (
    <Container>
      {badChoices.map((choice) => (
        <p key={choice}>{choice}</p>
      ))}
    </Container>
  )
}
