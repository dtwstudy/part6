import { createSlice } from '@reduxjs/toolkit'
const stateInit = {message: '' , status: false}

const messageSlice = createSlice({
  name: 'message',
  initialState: stateInit,

  reducers: {
    messageChange(state, action) {
      const message = action.payload
      state = {message:message, status:true}
      return state
      
    },
    messageClear(state ,  ){
      state = {message:'', status:false}
      return state
    }

    
  }
})

export const { messageChange ,messageClear }  = messageSlice.actions
export const setMessage = (message ,timeout) => {
  return async dispatch  => {
    dispatch(messageChange(message ,timeout))
    setTimeout( () =>{ dispatch(messageClear())},timeout )
  }
 
}
export default messageSlice.reducer