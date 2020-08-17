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
            <Emoji text=":upside_down_face:" />
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Smile />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-info" onClick={props.onHide}>
          share
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const SmileModal = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <Container>
      <>
        <Button variant="link" onClick={() => setModalShow(true)}>
          <h1>
            <Emoji text=":upside_down_face:" />
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

export default SmileModal

const Smile = () => {
  const smileChoices = [
    'Im thriving (all things considered...)',
    'today is a pretty good day',
    'I got this',
    'Im a hot mess and Im rolling with it',
    'Feeling great and ready for some fun',
  ]
  return (
    <Container>
      {smileChoices.map((choice) => (
        <p key={choice}>{choice}</p>
      ))}
    </Container>
  )
}
