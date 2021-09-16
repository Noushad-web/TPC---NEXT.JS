import React from 'react';
import { useDispatch } from 'react-redux';
import { dropzoneFiles } from '../../actions';
import UploadDropzone from '../upload/Upload_Dropzone'

const UploadWrapper = () => {

  const dispatch = useDispatch()
  dispatch(dropzoneFiles('files data'))
  
  return (
    <section>
      <UploadDropzone />
    </section>
  )
}

export default UploadWrapper
