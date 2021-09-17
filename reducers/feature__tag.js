const intialState = '';

const feature__tag = (state = intialState, action ) => {
  if (action.type === 'FEATURE__TAG'){
    return action.tag
  }else{
    return state
  }
}

export default feature__tag;