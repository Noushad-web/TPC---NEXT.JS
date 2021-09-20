import React, { useEffect, useState } from 'react';
import style from './tagSidebar.module.scss';
import Feature_button from './tag_Buttons/Feature_button';
import Year_button from './tag_Buttons/Year_button';
import { useSelector, useDispatch } from 'react-redux';

const TagsWrapper = (props) => {

  const imgData = useSelector(state => state.img__data)  
  const tag = useSelector(state => state.tag);
  const [tagObject, setTagObject] = useState({});
  const [counter, setCounter] = useState(0);
  let [finalImgData, setFinalImgData] = useState([]);
  const [imgObj, setImgObj] = useState([])

  // extracting imgData
  useEffect(()=>{
    let imgDetailsArray__Object = [];
    imgData.forEach((item, index) => {
      
      const src = item.getAttribute('data-src');
      const name = item.getAttribute('data-name');
      const id = item.getAttribute('data-id');
      const size = item.getAttribute('data-size');
      imgDetailsArray__Object[index] = { id, src, name, size: `${size / 1000} kb`}
    })
    setFinalImgData(()=> imgDetailsArray__Object)
  }, [imgData])


  // setting tag object
  useEffect(() => {
    setTagObject((prevState) => ({ ...prevState, ...tag }))    
  }, [tag])


  useEffect(()=>{
    setFinalImgData((prevState)=> {
      if(prevState !== undefined){
        prevState.map(item => {
          return {...Object.assign(item, { tags: tagObject }) }
        })
      }
    })
  }, [tagObject])


  useEffect(()=>{
    console.log('[final img data] ', finalImgData);
  }, [finalImgData, tagObject])

  useEffect(() => {
    if (counter === 0) {
      localStorage.clear();
    }
  }, [counter])


  return (
    <div className={style.sideContainer} >
      <h1>Assign your tags here</h1>

      <Year_button/>
      <hr />
      <Feature_button/>

      <div className={style.wrapper}>
        <button className={style.tagAssigned}>tags assigned</button>        
        <button className={style.finish}>finish upload </button>        
      </div>
    </div>
  )
}

export default TagsWrapper;
