const initialState = [];
const img__data = (state = initialState, action) => {
  if (action.type === 'IMG__DATA'){                
    return [...action.dataArray];
  }
  else{
    return state
  }
}

export default img__data;