import React from 'react';
import style from './tagSidebar.module.scss';
import Feature_button from './tag_Buttons/Feature_button';
import Year_button from './tag_Buttons/Year_button';


const TagsWrapper = (props) => {
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
