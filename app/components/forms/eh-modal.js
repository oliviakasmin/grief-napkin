import {Modal, Button, Container, Form, Col} from 'react-bootstrap'
import React from 'react'
import Emoji from 'react-emoji-render'

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
            <Emoji text=":neutral_face: " />
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Eh />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-info" onClick={props.onHide}>
          share
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const EhModal = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <Container>
      <>
        <Button variant="link" onClick={() => setModalShow(true)}>
          <h1>
            <Emoji text=":neutral_face: " />
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

export default EhModal

const Eh = () => {
  const ehChoices = [
    'okay, just want to be alone',
    'oh you know, trudging on',
    'life sucks, but Im "ok"',
    'this is hard, but I got dressed!',
    'okay, and I could really use some company',
  ]
  return (
    <Container>
      {ehChoices.map((choice) => (
        <p key={choice}>{choice}</p>
      ))}
    </Container>
  )
}
