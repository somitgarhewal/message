import { GET_ALL_USER, ADD_NEW_USER, UPDATE_USER } from '../types'
 
const initialState = {
        loggedInUser: "none",
        users: []  
        }
        
    
  const  userReducer  = (state = initialState, action) => {
        switch(action.type){ 
          case GET_ALL_USER :
           return{
            ...state,
            users: action.payload
          }

          case ADD_NEW_USER :
            const usersRef = [...state.users]
            usersRef.push(action.payload.data)
            alert("user added")
            return {
                ...state,
                users: usersRef
            }

            case UPDATE_USER :
                const updateUsersRef = [...state.users]
                const updatedUsers = updateUsersRef.map(element => {
                   if(element._id == action.payload.user._id) {
                       alert("user updated")
                     return action.payload.user
                  }
                    return element
                  }
                )
                return {
                  ...state,
                  users : updatedUsers
                }

          default: return state
        }
     
  }
  
  export default userReducer