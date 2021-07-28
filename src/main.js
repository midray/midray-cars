import React from 'react';
import Navbar from './navbar';
import Market from './market';


const Main = () =>{
    return <>
    {/* single-overlay */}
    <section> 
        <Navbar />
        <Market />
    </section>
    </>
}

export default Main;