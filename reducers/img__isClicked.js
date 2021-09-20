const initialState = false;

const img__isClicked = (state = initialState, action) => {
  if (action.type === 'IMG__IS__CLICKED?'){
    return action.booleanValue
  }
  else{
    return state;
  }
}
export default img__isClicked;