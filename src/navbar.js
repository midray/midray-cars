import React from 'react'
import style from 'styled-components';
import logomain from '../src/assets/img/logomain.png';
import {Link} from 'react-router-dom'

const NavBar = () =>{
  return <Wrapper>
        <div  className="logo_headers">
          <div>
        <div className="logo-containers">
           <Link to="/"> <img src={logomain} alt="logomain" className="logo"/> </Link>
        </div>
        <div className="brand-name">
        <span className="midray midrays">Midray</span>
        <span className="global globals">Global</span>
        </div>
        </div>
    
         <div className="contacts">
         <div>Call:</div>
         <div>786-710-7785</div>
        <span className="contact-email">contact@midrayglobal.com</span>
       
        </div>
        </div>
             {/* <button className="nav-toggle"><FaBars /></button> */} 
</Wrapper>
  
}

export default NavBar;

const Wrapper = style.nav`
.logo_headers{
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1170px;
  width: 90vw;
  margin-top: 10px;
  align-items: center
  
}
.logo-containers{
  height: 70px;
  position: relative;
  width: 70px;
  background-color: #0000a0;
  /* justify-content: center; */
  /* align-items: center; */
}
.logo{
  position: absolute;
  width: 50%;
  height: 100%;
  padding: 10px;
  margin-left: -5px;
  display: inline-block;
 object-fit: cover;
 /* margin-top 10px; */
  /* top: 7px; */
  /* left: 0; */
}
.brand-name{
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  left: 80px;
}
.contacts{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: var(--blue-gray);
  
}

 
`