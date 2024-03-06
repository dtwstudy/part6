const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  const inc = 1
  switch (action.type) {
    case 'GOOD':
      return {...state, good : state.good + inc}
    case 'OK':
      return {...state, ok : state.ok + inc}
    case 'BAD':
      return {...state, bad : state.bad + inc}
    case 'ZERO':
      return   {...state, good : 0 , ok: 0 , bad: 0}
    default: return state
  }
  
}

export default counterReducer
