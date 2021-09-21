const initialState = [];
const arr = []
const saved__data = (state = initialState, action) => {

  if (action.type === 'SAVED__DATA'){
    arr.push(...action.data)
    console.log('saved data is : ', arr)
    return arr;
  }
  else{
    return state
  }
}

export default saved__data;