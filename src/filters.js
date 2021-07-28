import React from 'react'
import {useGlobalContext} from './context';

import {getUniqueValues} from '../src/utils/helpers';
import styled from 'styled-components';
import {FaCheck} from 'react-icons/fa';


const Filters = () =>{

  const {allProducts, 
    
    filters: {brand,
    type,
    price,
    min_price,
    max_price,
    color,
    year,
    min_mileage,
    max_mileage,
    mileage},
    clearFilter,
    updateFilter
} = useGlobalContext();

const brands = getUniqueValues(allProducts, 'brand');
const types = getUniqueValues(allProducts, 'type')
const years = getUniqueValues(allProducts, 'year')
const colors = getUniqueValues(allProducts, 'color')
// console.log(brands)

  return <>
  <Wrapper>
  <div className="content">
            <form onSubmit={(e)=>e.preventDefault()}>
            {/* brand */}
          
            <div className="form-control">
            <h5>Brand</h5>
            <div>
            {brands.map((b, index)=>{
            return <button key={index} 
            type="button"
            name='brand' 
            onClick={updateFilter}
            className={`${b === brand ? 'active' : null}`}
            >
                {b}
            </button>
         
            })}
               </div>
            </div>
            {/* end of brand */}

             <div className="form-control">
            <h5 >Type</h5>
            <div>
            <select name="type" 
            value={type}
            onChange={updateFilter}
            className="type"
            >
            {types.map((t, index)=>{
                return <option key={index}
                value={t}
                >{t}</option>
            })}
            </select>
            </div>
            </div>

            <div className="form-control">
              <h5 className="price-h">Price</h5>
              <p className="price">
                ${price}
              </p>
              <input type="range" name="price" onChange={updateFilter}
              min={min_price} max={max_price} value={price}
              />
          </div>


       
        <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
            {colors.map((c, index)=>{
                if(c === 'All'){
                 
                    return <button
                    key={index}
                    onClick={updateFilter}
                    name='color'
                    data-color='All'
                    className={`${color === 'All' ? 'all-btn active' : 'all-btn'}`}
                    >
                        All
                    </button>
                }
                return <button
                key={index} 
                name="color"
                style={{background: c}}
                onClick={updateFilter}
                data-color={c}
                className={`${color === c ? 'color-btn active' : 'color-btn'}`}
                >{c === color ? <FaCheck /> : null}</button>
            })}
            </div>
        </div>

        <div className="form-control">
            <h5 >Year</h5>
            <div>
            <select name="year" 
            value={year}
            onChange={updateFilter}
            className="type"
            >
            {years.map((y, index)=>{
                return <option key={index}
                value={y}
                >{y}</option>
            })}
            </select>
            </div>
            </div>
     
        
        <div className="form-control">
              <h5 className="price-h">Mileage</h5>
              <p className="price">
                {mileage}
              </p>
              <input type="range" name="mileage" onChange={updateFilter}
              min={min_mileage} max={max_mileage} value={mileage}
              />
          </div>
          
        </form>

        <button type="button" className="clear-btn"
      onClick={clearFilter}
      >
        clear filters
      </button>

    </div>
        </Wrapper>
  </>
}

export default Filters;

const Wrapper = styled.section`
.form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
    .price-h{
        margin-bottom: -0.2rem
    }
  }
  
button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
    
  }
.active {
    opacity: 1;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  
  
  .type {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .price {
    margin-bottom: 0.25rem;
    margin-left: -0.5rem
    
  }
  .clear-btn {
    background: var(--clr-red-blue);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
.color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
.all-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        opacity: 0.5;
      }
.all-btn .active {
        text-decoration: underline;
      }
`