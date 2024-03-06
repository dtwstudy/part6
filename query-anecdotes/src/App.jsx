import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAll, updateVote } from './server'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useMessageDispatch } from './MessageContent'

const App = () => {
  const dispatch = useMessageDispatch()
  const queryClient = useQueryClient()
  const updateMutation = useMutation({
    mutationFn: updateVote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
  })

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll,
    retry: 1
  })
  console.log(JSON.parse(JSON.stringify(result)))


  if (result.isLoading) {
    return (<div>Loading ..</div>)
  }
  console.log(result)

  const handleVote = (anecdote) => {

    updateMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch({ type: 'SET', payload: { message: 'Vote added', status: false } })
    setTimeout(() => dispatch({ type: 'CLEAR' }), 5000)
    console.log('vote')
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />


      <AnecdoteForm />

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
