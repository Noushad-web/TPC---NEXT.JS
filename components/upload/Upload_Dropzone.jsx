import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import style from './upload.module.scss';

const UploadDropzone = (props) => {
  const [files, setFiles] = useState([]);
  let clickedImg = [];

  const clickHandler = (e) =>{
    if (e.target.className.search('clicked') === -1){      
      e.target.classList.add(`${style.clicked}`);
      clickedImg.push(e.target);
    }else{
      e.target.classList.remove(`${style.clicked}`);      
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
        <span>{(file.size)/1000}kb</span>
      </div>
    </figure>
  ));

  useEffect(()=>{
    console.log(clickedImg);
  }, [clickHandler])

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks    
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
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
    </section>
  );
}

export default UploadDropzone;