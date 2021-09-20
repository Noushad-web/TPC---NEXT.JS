import React from 'react'
import style from './button.module.scss';

const Button = (props) => {
  return (
    <button {...props} className={style.button}>{props.children}</button>
  )
}

export default Button;
