export const img__isClicked = (booleanValue)=>{  
  return{
    type: 'IMG__IS__CLICKED?',
    booleanValue
  }
}

export const feature__tag = (tag) => {  
  return{
    type: 'FEATURE__TAG',
    tag
  }
}

export const year__tag = (tag) => {
  return{
    type: 'YEAR__TAG',
    tag
  }
}

export const img__data = dataArray =>{
  return {
    type: 'IMG__DATA',
    dataArray
  }
}

export const reset__data = counter =>{
  return {    
    type: 'RESET__IMG__DATA',
    counter
  }
}

export const saved__data = data => {
  return{
    type: 'SAVED__DATA',
    data
  }
}
