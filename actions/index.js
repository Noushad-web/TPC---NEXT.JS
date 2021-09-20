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