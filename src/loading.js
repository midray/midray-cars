import React from 'react';
import styled from 'styled-components'

const Loading = () => {
  return <Wrapper>
  <div className="center">
<div className="loading">

</div>
  </div>
  </Wrapper>
}

export default Loading;
const Wrapper = styled.div`
.center{
  display: grid;
  margin: 10rem auto;
  align-items: center;
  justify-content: center
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}


.loading{
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 4px solid #eaded7;
  border-top-color: blue;
  animation: spinner 0.5s linear infinite
}
`