const initialState = '';
const counter = (state = initialState, action) => {
  if (action.type === 'RESET__IMG__DATA') {
    return action.counter;
  }
  else{
    return state
  }
}

export default counter;