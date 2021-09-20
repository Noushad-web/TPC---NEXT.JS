const intialState = '';
const tag = (state = intialState, action ) => {
  if (action.type === 'FEATURE__TAG'){
    return { 
      feature: action.tag 
    }
  }
  else if(action.type === 'YEAR__TAG'){
    return {
       year: action.tag
    }
  }
  else{
    return state
  }
}

export default tag;