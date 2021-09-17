import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import style from './upload.module.scss';
import { useDispatch } from 'react-redux';
import { img__isClicked } from '../../actions/index';

const UploadDropzone = (props) => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);  
  let [clickedImg, setClickedImg] = useState([]);
  
  const clickHandler = (e) =>{    
    
    // tick symbol logic
    if (e.target.className.search('clicked') === -1){
      clickedImg.push(e.target);
      e.target.classList.add(`${style.clicked}`);
      dispatch(img__isClicked(true)) // dispatch the sidebar action
    }
    else{
      e.target.classList.remove(`${style.clicked}`);
      clickedImg.map((element, index) => {
        if(e.target === element){
          clickedImg.splice(index, 1);
        }
        if (clickedImg.length === 0) dispatch(img__isClicked(false))  //dispatch the sidebar
      })
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        src: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (  
    <figure onClick={clickHandler} className={style.thumbs} data-src={file.src} data-name={file.name} data-id={file.lastModified} data-size={(file.size)/1000} key={file.name}>
      <div className={style.thumbInner}>
        <img src={file.src} />
        <span>{(file.size)/1000} kb</span>
      </div>
    </figure>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks    
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="container">
      <div {...getRootProps({ className: style.dropzone })}>
        <input {...getInputProps()} />
        <div className={style.wrapper}>
          <p>Drag 'n' drop some files here, or click to select files</p>
          <button className={style.uploadBtn}>Upload</button>
        </div>
      </div>
      <aside className={style.thumbsContainer}>
        {thumbs}
      </aside>
    </div>
  );
}

export default UploadDropzone;