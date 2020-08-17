import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGetUser} from '../redux/users.js'
import {Container, Image, Col, Row, Button} from 'react-bootstrap'
const {User} = require('../../models')

const UserProfile = (props) => {
  const olivia = {
    first: 'Olivia',
    last: 'Kasmin',
    email: 'oliviakasmin@gmail.com',
    username: 'oliviak',
    lost: {connection: 'partner', name: 'Andrea', reason: 'cancer'},
    dates: {
      birthday: '1992-4-21',
      deathiversary: '2019-3-9',
      specialOccasion: {description: 'anniversary', date: '2011-11-19'},
    },
  }
  return (
    <Container>
      <h5>hey, {olivia.first}</h5>
    </Container>
  )
}

export default UserProfile
// class UserProfile extends Component {
//   componentDidMount() {
//     const username = this.props.match.params.username
//     this.props.getUser(username)
//   }
//   render() {
//     console.log(this.props)

//     return (
//       <div>
//         <p>hey</p>
//       </div>
//     )
//   }
// }

// const mapState = (state) => ({
//   user: state.user,
// })

// const mapDispatch = (dispatch) => ({
//   getUser: (username) => dispatch(fetchGetUser(username)),
// })

// export default connect(mapState, mapDispatch)(UserProfile)
