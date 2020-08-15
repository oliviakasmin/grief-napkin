import axios from 'axios'

const initialState = {}

const GET_USER = 'GET_USER'
const UPDATE_USER = 'UPDATE_USER'

export const getUser = (user) => ({
  type: GET_USER,
  user,
})

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
})

export const fetchGetUser = (userId) => {
  return async (dispatch) => {
    try {
      const foundUser = await axios.get(`api/users/${userId}`)
      dispatch(getUser(foundUser.data))
    } catch (err) {
      console.error(err)
    }
  }
}

//req.body = filter{email: 'email'} , update {name: Olivia}
export const fetchGetUser = (emailObj, updateObj) => {
  return async (dispatch) => {
    try {
      const newUser = await axios.post('api/users/')
      dispatch(updateUser(newUser.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case UPDATE_USER:
      return action.user
    default:
      return state
  }
}
