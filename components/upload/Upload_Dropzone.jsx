import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import style from './upload.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { img__isClicked, img__data } from '../../actions/index';

const UploadDropzone = (props) => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);  
  let [clickedImg, setClickedImg] = useState([]);  
  const reset__data = useSelector(state => state.counter);

  // putting a check symbol on img when clicked 
  const clickHandler = (e) =>{        
    if (e.target.className.search('clicked') === -1){          
      setClickedImg((prevState) => [...prevState, e.target]);
      e.target.classList.add(`${style.clicked}`);
      dispatch(img__isClicked(true)) // dispatch the sidebar action      
    }
    else{
      if(clickedImg !== undefined){        
        e.target.classList.remove(`${style.clicked}`);        
        const filteredArray = clickedImg.filter((item, index, clickedImg)=>{
          return item !== e.target;
        })        
        setClickedImg(filteredArray);
        if (clickedImg.length === 0) dispatch(img__isClicked(false))  //dispatch the sidebar
      }
    }
  }


  useEffect(()=>{    
    dispatch(img__data(clickedImg));    
  }, [clickedImg])


  // resetting the img data when user assigned them
  useEffect(()=>{          
      setClickedImg([])    
  }, [reset__data])


  // by npm package
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        src: URL.createObjectURL(file)
      })));
    }
  });


  //  dynamic files
  const thumbs = files.map(file => (  
    <figure onClick={clickHandler} className={style.thumbs} data-src={file.src} data-name={file.name} data-id={file.lastModified} data-size={(file.size)/1000} key={file.name}>
      <div className={style.thumbInner}>
        <img src={file.src} />
        <span>{(file.size)/1000} kb</span>
      </div>
    </figure>
  ));


  // preventing memory leak
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