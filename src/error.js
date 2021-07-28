import React from 'react';
import styled from 'styled-components'


const Error = () =>{
    return <Wrapper>
        <div  className="center">
    <h2>Server Error</h2>
    <div>Product not found</div>
    <h5 className="redirect"> Redirecting...</h5>
    </div>
    </Wrapper>
}

export default Error;


const Wrapper = styled.div`
.center{
    display: grid;
    margin: 8rem auto;
    align-items: center;
    text-align: center;
    background: blue;
    color: white;
    width: 200px;
    border-radius: 3px
}
    h2{
        font-size: 2rem
    }
.redirect{
    margin: 1rem 0
}
`