import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGetUser} from '../redux/users.js'

class UserProfile extends Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount() {
    const username = this.props.match.params.username
    this.props.getUser(username)
  }

  render() {
    return <div></div>
  }
}

const mapState = (state) => ({
  user: state.userReducer,
})

const mapDispatch = (dispatch) => ({
  getUser: (username) => dispatch(fetchGetUser(username)),
})

export default connect(mapState, mapDispatch)(UserProfile)
