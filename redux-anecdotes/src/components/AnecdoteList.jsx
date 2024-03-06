import { useSelector, useDispatch } from 'react-redux'
import { updateVote} from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/messageReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes.filter((anecdote=>anecdote.content.includes(state.filter))))
  const dispatch = useDispatch()

  const vote = async(anecdote) => {
    dispatch(updateVote(anecdote))
    dispatch(setMessage('Vote updated', 5000))
   }

  return (
    <div>
    {
      anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )
    }</div>
  )
}

export default AnecdoteList