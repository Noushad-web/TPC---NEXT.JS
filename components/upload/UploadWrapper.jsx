import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UploadDropzone from '../upload/Upload_Dropzone'
import TagsWrapper from '../tags/TagsWrapper';
import style from './upload.module.scss';

export const UploadWrapper = () => {

  const [imgClicked__State, setImgClicked__State] = useState(false)
  const img__isClicked = useSelector(state => state.img__isClicked);
  
  useEffect(()=>{
    setImgClicked__State(img__isClicked);
  }, [img__isClicked])
    
    return (
    <>
      <div className={style.componentWrapper}>
        <section>
          <UploadDropzone />
        </section>
        <aside>
          {(img__isClicked === true) ? <TagsWrapper /> : null }
        </aside>
      </div>
    </>
  )
}

