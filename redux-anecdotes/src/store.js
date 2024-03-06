import { configureStore } from '@reduxjs/toolkit'
import AnecdoteSlice from './reducers/anecdoteReducer'
import filterSlice from './reducers/filterReducer'
import messageSlice from './reducers/messageReducer'

const store = configureStore({
  reducer: {
    anecdotes: AnecdoteSlice,
    filter: filterSlice,
    message : messageSlice
  }
})

export default store