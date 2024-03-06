import { createSlice } from '@reduxjs/toolkit'
import Anecdotes from '../services/anecdotes'



const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const SortBy = (a, b) => {
  if(a.votes < b.votes) return 1
  else if(a.votes > b.votes) return -1
  return 0
}

const initialState = []

const AnecdoteSlice = createSlice({
  name:'anecdotes',
  initialState,
  reducers :{

    Vote(state ,action){
      const updateVote  = action.payload
       state.map(a=>{
        if(a.id === updateVote.id) a.votes = updateVote.votes
        return a
      })
      return state
     

    },
    Add(state, action){
      const anecdote = action.payload
      state.push(anecdote)
    },
    Sort(state){
      return state.toSorted((a, b) => SortBy(a,b))
    },

    Set(state, action){
        return action.payload
    }

  }
})
export const { Vote, Add , Sort , Set} = AnecdoteSlice.actions

export const initializeAnecdote = () => {
  return async dispatch => {
    const anecdotes = await Anecdotes.getAll()
    dispatch(Set(anecdotes))
  }
}
export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await Anecdotes.createNew(content)
    dispatch(Add(newAnecdote))
  }
}
export const updateVote = (anecdote) => {
  return async dispatch => {
    const updatedVote = await Anecdotes.updateVote(anecdote)
    
    dispatch(Vote(updatedVote))
    dispatch(Sort())
  }
}

export default AnecdoteSlice.reducer
