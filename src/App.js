import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './landing';
import SingleCar from './singlecar';
import Error from './error';
import Main from './main';



function App(){
  return <>
 <Router>
   <Switch>
     <Route exact path="/">
        <Landing />
      </Route>
 <Route exact path="/products">
   <Main />
 </Route>
 <Route exact path="/products/:id" children={<SingleCar />}></Route>
 <Route path="*">
 <Error />
 </Route>
 </Switch>
  </Router>
  
  </>
}

export default App;