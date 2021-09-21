import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import style from './tagSidebar.module.scss';
import Feature_button from './tag_Buttons/Feature_button';
import Year_button from './tag_Buttons/Year_button';
import { useSelector, useDispatch } from 'react-redux';
import { reset__data, saved__data } from '../../actions';

const TagsWrapper = (props) => {

  // accesing the global storage of redux store
  const imgData = useSelector(state => state.img__data)  
  const tag = useSelector(state => state.tag);
  const dispatch = useDispatch();
  // all states
  const [tagObject, setTagObject] = useState({});
  const [counter, setCounter] = useState(0);
  let [finalImgData, setFinalImgData] = useState([]);

  // extracting imgData
  useEffect(()=>{
    let imgDetailsArray__Object = [];
    imgData.forEach((item, index) => {      
      const src = item.getAttribute('data-src');
      const name = item.getAttribute('data-name');
      const id = item.getAttribute('data-id');
      const size = item.getAttribute('data-size');
      imgDetailsArray__Object[index] = { id, src, name, size: `${size}kb`}
    })
    setFinalImgData(()=> imgDetailsArray__Object)
  }, [imgData])


  // setting tag object
  useEffect(() => {
    setTagObject((prevState) => ({ ...prevState, ...tag }))        
  }, [tag])


  // set final img data with tags
  useEffect(()=>{
    setFinalImgData((prevState)=> {
      return (
        prevState.map(item => {
          return {...Object.assign(item, { tags : tagObject })}
        })
      )
    })
  }, [tagObject])


  // saving the final img data to localStorage
  useEffect(()=>{
    if(counter > 0 ){
      // localStorage.setItem(counter, JSON.stringify(finalImgData));
      dispatch(saved__data(finalImgData))
    }
  }, [counter])


  // clearing the previous localStorage when component renders
  useEffect(() => {
    if (counter === 0) {
      // localStorage.clear();
      dispatch(saved__data([]));
    }
  }, [counter])


  // tag assigned button handler over here 
  const tagAssigned__handler = (e)=>{
    setCounter((prevState)=> prevState + 1);
    dispatch(reset__data(counter))
    // removing the element after assigning tag to them
    imgData.forEach(item=>{
      item.style.display = 'none';
    })
  }


  return (
    <div className={style.sideContainer} >
      <h1>Assign your tags here</h1>

      <Year_button/>
      <hr />
      <Feature_button/>

      <div className={style.wrapper}>
        <button className={style.tagAssigned} onClick={tagAssigned__handler}>tags assigned</button>        
        <Link href='/filter'>
          <button className={style.finish}>finish upload </button>        
        </Link>
      </div>
    </div>
  )
}

export default TagsWrapper;
