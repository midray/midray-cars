import React, {useEffect} from 'react';
import {useParams, useHistory, Link} from 'react-router-dom';
import {useGlobalContext} from './context';
import Error from './error';
// import {FaTimes} from 'react-icons/fa';
import Divider from './divider'
import NavBar from './navbar'
import style from 'styled-components';
import PictureImages from './pictureimages';
import Loading from './loading'




const url = 'https://mid-ray-airables-project.netlify.app/api/midraycars?id='
const SingleCar = () =>{
    const {id} = useParams();
    const history = useHistory();
    const {getSingleProduct, single_product_loading: loading, single_product_error: error, single_product: product} = useGlobalContext();
    useEffect(()=>{
      if(error){
        setTimeout(()=>{
          history.push('/')
        }, 3000)
      }
      // eslint-disable-next-line
    }, [error])

  useEffect(()=>{
    getSingleProduct(`${url}${id}`)
  // eslint-disable-next-line
  },[id])
  if(loading){
    return<>
  <NavBar />
  <Loading />
    </> 
   
  }
  if(error){
    return<>
    <NavBar />
  <Error />
    </> 
    
    
  }
  const {fields: {
    name, 
    year, 
    images, 
    price, 
    transmission, 
    fuel_type, 
    mileage, 
    color, 
    VIN, 
    condition, 
    description,
    engine, 
    exterior,
    interior, 
    drivetrain, 
    mechanical
  }} = product;
  console.log(name)
    return <>
        <NavBar />
        <Divider data={`Products/${name}`}/>
      
        <Wrapper>
          <div className="center">
        <Link to="/products" className="btn">
        back to products
      </Link>
      </div>
            <div className="single-container">
       
                <PictureImages images={images}/>
                 <div>
                   <div>
                   <h3 className="car-name">{name} {year}</h3>
                   <p className="car-price">${price}</p>
                   <h4 className="desc-title">Description</h4>
                   <p className="desc">{description}</p>
                   </div>
                   <hr />
                   <div>
                     <h4 className="details-title">Details</h4>
                     <div className="details">
                    <div className="details-info">
                    <p className="info">
                        <span>Condition :</span> {condition}</p>
                      <p className="info">
                        <span>Mileage :</span>{mileage}</p>
                    </div>
                        
                    <div className="details-info">
                    <p className="info">
                        <span>Exterior color :</span>{exterior}</p>
                      <p className="info">
                        <span>Interior :</span>{interior}</p>
                    </div>

                    <div className="details-info">
                    <p className="info">
                        <span>VIN :</span>{VIN}</p>
                      <p className="info">
                        <span>Fuel Type :</span>{fuel_type}}</p>
                    </div>

                    <div className="details-info">
                    <p className="info">
                        <span>Body :</span>{color}</p>
                      <p className="info">
                        <span>Drivetrain :</span>{drivetrain}</p>
                    </div>
                    <div className="details-info">
                    <p className="info">
                        <span>Transmission :</span>{transmission}</p>
                        <p className="info">
                        <span>Engine :</span>{engine}</p>
                      
                    </div>

                    <div className="details-info">
                    <p className="info">
                        <span>Mechanical :</span>{mechanical}</p>
                     </div>

                    </div>
                    </div>
                 </div>
            </div>
           
        </Wrapper>
        
    </>

}
export default SingleCar;

const Wrapper = style.main`
.single-container{
    display: grid;
    gap: 4rem;
    
    
    margin: 2rem auto;
    width: 90vw;
    min-height: 100vh;
    
    
   
}
.car-name{
  color: var(--blue-gray);
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-xxxxxxxl);
    font-style: normal;
    font-weight: 700;
    margin-bottom: 0.5rem;
 
}
.details{
  display: grid;
  gap: 1rem;
 
}
.car-price{
  
    color: var(--mine-shaft);
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-xxxxxxxxl);
    font-style: normal;
    font-weight: 700;
    height: 60px;
    
    letter-spacing: 0.00px;
    line-height: 44px;
    position: absolute;
    text-align: left;
    
    white-space: nowrap;
   
}

.desc-title{
  margin-top: 5rem;
  font-size: 1.5rem;
  
  color: var(--blue-gray);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-xxxxl);
  font-style: normal;
  font-weight: 700;
  height: 37px;
    
    letter-spacing: 0.00px;
    line-height: 26px;
  
    
    white-space: nowrap;
 
}
.details-info{
  display: grid;
  grid-row-gap: 20px;
}
.details-title{
  display: flex;
  margin-top: 1rem;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--blue-gray);
  font-family: var(--font-family-poppins);
 
  font-style: normal;
  font-weight: 700;
  height: 37px;
  letter-spacing: 0.00px;
  line-height: 26px;
  white-space: nowrap;
}
.btn {
 
  text-transform: uppercase;
  background: var(--blue-gray);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  border-color: transparent;
  
  
}
.center{
  margin-left: 5%;
  width: 90vw;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.desc {
  line-height: 2;
  max-width: 45em;
}
@media screen and (min-width: 992px) {
  .single-container {
   
   grid-template-columns: repeat(2, 1fr)     
  }

  .details{
    grid-template-columns: repeat(2, 1fr) 
  }
}
.info {
  text-transform: capitalize;
  width: 300px;
  display: grid;

  grid-template-columns: 150px 1fr;
  span {
    font-weight: 700;
  }
  

`