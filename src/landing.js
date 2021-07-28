import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () =>{

    return <>
    <div className="hero" style={{
    backgroundImage: 'url(/Background.png)',
    height: '100vh'
    }}>
   <div className="mainlogo"> 
   <img className="logomain1" src="logo1.png" alt=""/>
   <img className="logomain" src="logomain.png" alt=""/>
   <div className="midrayglobal">
   <div className="midray">Midray</div>
   <div className="global">Global</div>
   </div>
   <div className="phone_email">
     <div className="phone">
     <img className="phone_image" src="phone.png" 
    alt=""/>
     <div>786-710-7785</div>
     </div>
     <div className="email">
     <img src="email.png" alt="" style={{height: 20, color: 'white',
    marginRight: 10
    }}/>
     <div>contact@midrayglobal.com</div>
     </div>
   </div>
   </div>  
   <div className="perfect">The perfect car delivered to your doorstep.</div>
  
    <div className="prestige">Midray Global is a prestige car supermarket, specializing in buying and selling excellent quality used
                and new cars.</div>
    <div className="business_type">
      <div>
      <Link to="/products" className="buy-a-car"> 
         <div className="rectangle">  
          
           <div className="buycar">BUY A CAR</div>
            </div>
           </Link>
      </div>

     
       <div className="sell-a-car">
         <div className="rectangle" style={{
           backgroundColor:'#d86d80',
           borderColor: '#ffffff',
           borderStyle: 'solid',
           borderWidth: 1,
           cursor: 'default'
           }}>  
          
           <div className="buycar" style={{color: '#ffffff'}}>SELL A CAR</div>
            </div>
            </div>
      
    
      </div>    


      <div className="business_type_details">
      <div className="locations">
       Search over 11,000 cars over 3 locations
      </div>

      <div className="valuation">
       Get free valuations
      </div>
    
      </div>    
      
       
             
  </div>
    </>
}

export default Landing