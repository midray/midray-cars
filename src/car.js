import React from 'react';
import {Link} from 'react-router-dom';
import {useGlobalContext} from './context'



const Car = ({id,url, name, year, price, transmission, fuel_type, mileage}) =>{
 const {toggleOverlay} = useGlobalContext();

 return <Link to={`/products/${id}`} onClick={()=>toggleOverlay('open')}>
 <article className="car">
         <div>
                <img src={url} alt=""/>
                </div>
           <div>
                <div className="car_detail">
                    <p className="name">{name}</p>
                    <p className="year">({year})</p>
                </div>
                <div className="price">${price}</div>
                <div className="features">
                    <div className="features_type">Transmission: <span className="features_value">{transmission}</span></div>
                     <div className="features_type">Fuel Type: <span className="features_value">{fuel_type}</span></div>
                      <div className="features_type">Mileage: <span className="features_value">{mileage}</span></div>
                </div>
               </div>
            </article>
            </Link>
}

export default Car;