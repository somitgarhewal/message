import { GET_ALL_USER, ADD_NEW_USER, UPDATE_USER, USER_LOGGED_IN, DELETE_USER } from '../types'

const initialState = {
  loggedInUser: null,
  users: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload
      }

    case ADD_NEW_USER:
      const usersRef = [...state.users]
      usersRef.push(action.payload.data)
      alert("user added")
      return {
        ...state,
        users: usersRef
      }

    case UPDATE_USER:
      const updateUsersRef = [...state.users]
      const updatedUsers = updateUsersRef.map(element => {
        if (element._id == action.payload.user._id) {
          return action.payload.user
        }
        return element
      }
      )
      return {
        ...state,
        users: updatedUsers
      }

    case DELETE_USER:
      const deleteUsersRef = [...state.users]
      return {
        ...state,
        users: deleteUsersRef.filter(item => item._id !== action.payload)
      }

    case USER_LOGGED_IN:
      return {
        ...state,
        loggedInUser: action.user
      }

    default: return state
  }

}

export default userReducer