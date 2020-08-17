import React from 'react'
import {Container, Accordion, Card, Button} from 'react-bootstrap'
import Emoji from 'react-emoji-render'
import {Link} from 'react-router-dom'
import SmileModal from './smile-modal.js'
import EhModal from './eh-modal.js'
import BadModal from './bad-modal'

const DailyCheckForm = () => {
  return (
    <Container>
      <SmileModal />
      <EhModal />
      <BadModal />
    </Container>
  )
}

export default DailyCheckForm

// const Smile = () => {
//   return (
//     <Container>
//       <p>I'm thriving (all things considered...)</p>
//       <p>today is a pretty good day</p>
//       <p>I got this</p>
//       <p>I'm a hot mess and I'm rolling with it</p>
//       <p>Feeling great and ready for some fun</p>
//     </Container>
//   )
// }
// const Eh = () => {
//   return (
//     <Container>
//       <p>okay, just want to be alone</p>
//       <p>oh you know, trudging on</p>
//       <p>life sucks, but I'm "ok"</p>
//       <p>this is hard, but I got dressed!</p>
//       <p>okay, and I could really use some company</p>
//     </Container>
//   )
// }

// const Bad = () => {
//   return (
//     <Container>
//       <p>this feels like too much</p>
//       <p>don't want to get out of bed</p>
//       <p>I have to do something super shitty today</p>
//       <p>what's even the point</p>
//       <p>could really use some suport right about now</p>
//     </Container>
//   )
// }
