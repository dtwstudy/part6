import { createSlice } from '@reduxjs/toolkit'
const stateInit = ''

const filterSlice = createSlice({
  name: 'filter',
  initialState: stateInit,

  reducers: {
    filterChange(state, action) {
      state = action.payload
      return state
    },

    
  }
})

export const { filterChange }  = filterSlice.actions
export default filterSlice.reducer