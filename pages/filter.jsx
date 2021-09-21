import React, {useEffect, useState} from 'react';
import globalStyle from '../styles/global.module.scss';
import style from '../styles/filter.module.scss';
import counter from '../reducers/counter';
import { useSelector } from 'react-redux';


const filter = () => {
  
  // const fakeObject = [
  //   {
  //     "id": "1631871164846",
  //     "src": "blob:http://localhost:3000/036de518-0d2c-4197-9c44-31cd27472ced",
  //     "name": "last-updatedPNG.PNG",
  //     "size": "13.286kb",
  //     "tags": {
  //       "year": 2020,
  //       "feature": "nature"
  //     }
  //   },
  //   {
  //     "id": "1631623952861",
  //     "src": "blob:http://localhost:3000/38502e3b-01cd-40ea-946f-7263cce5e315",
  //     "name": "edward-howell-gM7hANhGSBU-unsplash.jpg",
  //     "size": "402.269kb",
  //     "tags": {
  //       "year": 2020,
  //       "feature": "nature"
  //     }
  //   },
  //   {
  //     "id": "1631623927326",
  //     "src": "blob:http://localhost:3000/de7685b3-16f3-4fec-99d4-2aa9dd366571",
  //     "name": "ricardo-gomez-angel-sRr0400SQio-unsplash.jpg",
  //     "size": "435.413kb",
  //     "tags": {
  //       "year": 2020,
  //       "feature": "nature"
  //     }
  //   },
  //   {
  //     "id": "1631623874014",
  //     "src": "blob:http://localhost:3000/619ea90b-9a52-49ef-a314-ed7690578895",
  //     "name": "ivan-shemereko-TwcI5h4sXmE-unsplash.jpg",
  //     "size": "1606.555kb",
  //     "tags": {
  //       "year": 2020,
  //       "feature": "fashion"
  //     }
  //   },
  //   {
  //     "id": "1631601049765",
  //     "src": "blob:http://localhost:3000/dd9cdf2e-5e18-4c0c-84f9-da08f3cdd15c",
  //     "name": "javascript-localstorage.avif",
  //     "size": "297.078kb",
  //     "tags": {
  //       "year": 2020,
  //       "feature": "fashion"
  //     }
  //   },
  //   {
  //     "id": "1631623883460",
  //     "src": "blob:http://localhost:3000/db368a86-5d06-45f0-b518-a517db7fa1bf",
  //     "name": "bruno-emmanuelle-oBzeCH75UHE-unsplash.jpg",
  //     "size": "159.431kb",
  //     "tags": {
  //       "year": 2020,
  //       "feature": "fashion"
  //     }
  //   },
  //   {
  //     "id": "1631594054677",
  //     "src": "blob:http://localhost:3000/484dba32-dcb1-479c-8957-f2d08f16fddf",
  //     "name": "melina-kiefer-cuCrFcifq3Q-unsplash.jpg",
  //     "size": "654.55kb",
  //     "tags": {
  //       "year": 2018,
  //       "feature": "fashion"
  //     }
  //   }
  // ];

  const count = useSelector((state)=> state.counter)
  const saved__data = useSelector(state => state.saved__data);
  const [isData, setIsData] = useState(false);
  let [filterData, setFilterData] = useState([]);
  const dataArray = [];

  
  const searchFormHandler = (e) => {
    e.preventDefault();
    const inputSearchedValue = e.target.search.value;

    saved__data.forEach((element)=>{
      const array__of__tags = Object.values(element.tags);
      array__of__tags.forEach(tag => {
        if(inputSearchedValue == tag){
          dataArray.push(element);                            
        }
      })      
    })
    if (dataArray.length > 0) setIsData(true);
    else setIsData(false);

    setFilterData(()=> [...dataArray])
  }

  useEffect(()=>{
    console.log('filtedData : ', filterData);
  }, [filterData])  

  return (
    <>
    <section className={style.section}>
      <div className={globalStyle.container, style.textCenter}>
        <form action="" onSubmit={searchFormHandler}>          
          <input type="text" name="search" placeholder="Search your tags here..."/>
          <button>Search</button>
        </form>
      </div>
    </section>

  <hr />

    <section className={style.section}>
      {
        (isData) ?
          <div className={style.data}>
            {
              filterData.map((eachImgData, index) => {
                return(
                  <figure key={index}>
                    <img src={eachImgData.src} alt={eachImgData.name} />
                    <span>{eachImgData.size}</span>
                  </figure>
                )
              })
            }
          </div>
          :
          <div className='data__no-data'>
            <h1>Oops!  No Data to show</h1>
          </div>
      }
    </section>
    </>
  )
}

export default filter
