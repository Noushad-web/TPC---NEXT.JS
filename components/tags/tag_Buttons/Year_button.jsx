import React from 'react';
import Button from './Button_design';
import style from './button.module.scss';

const Year_button = () => {
  const year = [2015, 2016, 2017, 2018, 2019, 2020];

  return (      
    <div className={style.wrapper}>
      {
        year.map((item, index) => {
          return <Button onClick={() => dispatch(feature__tag(item))} key={index}>{item}</Button>
        })
      }
    </div>
  )
}

export default Year_button
