const initialState = '';
const dropzoneReducer = (state = initialState, action) => {
  if (action.type === 'DROPZONE__FILES'){    
    return action.fileData;
  }
  else{
    return state
  }
}
export default dropzoneReducer;