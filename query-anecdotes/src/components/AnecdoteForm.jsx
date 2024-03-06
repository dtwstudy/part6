import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createNew } from '../server'
import { useMessageDispatch } from '../MessageContent'
const AnecdoteForm = () => {
  const dispatch = useMessageDispatch()
  const queryClient = useQueryClient()
  const createMutation = useMutation({
    mutationFn: createNew,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
  })


  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    if (content.length >= 5) {
      dispatch({ type: 'SET', payload: { message: 'Anecdote created', status: false } })
      setTimeout(() => dispatch({ type: 'CLEAR' }), 5000)
      createMutation.mutate({ content: content, votes: 0 })
    }
    else {
      dispatch({ type: 'SET', payload: { message: 'to short anecdote must have length 5 or more', status: false } })
      setTimeout(() => dispatch({ type: 'CLEAR' }), 5000)
    }
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
