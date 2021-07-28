import React from 'react';
// import './market.css';
// import {Slider} from '@material-ui/core';
// import Collapsible from 'react-collapsible';
// import { FaBars } from 'react-icons/fa';
// import {data} from './data'
// import Footer from './footer'
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



