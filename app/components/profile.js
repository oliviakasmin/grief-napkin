import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGetUser} from '../redux/users.js'

class UserProfile extends Component {
  componentDidMount() {
    const username = this.props.match.params.username
    this.props.getUser(username)
  }
  render() {
    console.log(this.props)

    return (
      <div>
        <p>hey</p>
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
})

const mapDispatch = (dispatch) => ({
  getUser: (username) => dispatch(fetchGetUser(username)),
})

export default connect(mapState, mapDispatch)(UserProfile)
