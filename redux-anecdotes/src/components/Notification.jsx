import { useSelector } from 'react-redux'
const Notification = () => {
  const notification = useSelector(state=>state.message)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
    if(notification.status)
   return (
    <div style={style}>
      { notification.message}
    </div>
  )
}

export default Notification