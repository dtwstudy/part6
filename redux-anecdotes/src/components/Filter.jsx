import { useDispatch } from 'react-redux'
import { filterChange } from "../reducers/filterReducer"
const Filter = () => {
  const dispatch  = useDispatch()
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    const filterInput = event.target.value
    console.log(filterInput)
    dispatch(filterChange(filterInput))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input name="filter" onChange={handleChange} />
    </div>
  )
}

export default Filter