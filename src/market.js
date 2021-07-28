import React from 'react';
import {useGlobalContext} from './context';
import Loading from './loading';

import Divider from './divider'
import ProductList from './products';
import Filters from './filters';



function Market(){
const {loading} = useGlobalContext();
   

    
 
  if(loading){
      return <Loading />
  }

 else
    return <>
  
    <Divider data="Products"/>
  
    <section className="main">
        <Filters />
        <div className="products_display">
        
        <ProductList />
        </div>

    </section>
 

    {/* footer */}
   
   
      
        
        
    </>
  }


export default Market;



