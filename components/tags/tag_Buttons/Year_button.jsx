import React from 'react';
import Button from './Button_design';
import style from './button.module.scss';
import { year__tag } from '../../../actions';
import { useDispatch } from 'react-redux';

const Year_button = () => {
  const year = [2015, 2016, 2017, 2018, 2019, 2020];
  const dispatch = useDispatch();

  return (      
    <div className={style.wrapper}>
      {
        year.map((item, index) => {
          return <Button key={index} onClick={ () => dispatch(year__tag(item)) }>{item}</Button>
        })
      }
    </div>
  )
}

export default Year_button
