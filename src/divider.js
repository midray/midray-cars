import React from 'react';
import {Link} from 'react-router-dom'

const Divider = ({data}) =>{
  return <>
  <section className="divider">
        <div className="divider-container">
        <h3><Link to="/">Home</Link>/ {data}</h3>
        </div>
        </section>
  </>
}

export default Divider;