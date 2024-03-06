import { useMessageValue } from '../MessageContent'

const Notification = () => {
  const data  = useMessageValue()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (data.status) return null

  return (
    <div style={style}>
      {data.message}
    </div>
  )
}

export default Notification
