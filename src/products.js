import React from 'react';
import './market.css';

import {useGlobalContext} from './context';
import Car from './car';


const ProductList = () =>{

  const {filtered_products} = useGlobalContext();

    if(filtered_products < 1){
      return <>
      <h3 className="showing">{filtered_products.length} Results Showing</h3>
      <h3 style={{textTransform: 'none'}}>Sorry, Search not found...</h3>
  </>
    }
else
  return <>
  <h3 className="showing">{filtered_products.length} Results Showing</h3>
  <section className="products">
        
        {filtered_products.map((product)=>{
            return <Car key={product.id} {...product}/>
        })}
         
        
     </section>
  </>
}

export default ProductList;