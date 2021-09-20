import React from 'react'
import Button from './Button_design';
import style from './button.module.scss';
import { useDispatch } from 'react-redux';
import { feature__tag, year__tag } from '../../../actions';

const Feature_button = () => {

  const feature = ['nature', 'fashion', 'Creative', 'home-decor'];
  const dispatch = useDispatch();

  return (
    <div className={style.wrapper}>
      {
        feature.map((item, index)=>{
          return <Button key={index} onClick={() => dispatch(feature__tag(item))}>{item}</Button>
        })
      }
    </div>
  )
}

export default Feature_button
