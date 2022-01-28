import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import PrivateRoute from './PrivateRoute';
import axios from 'axios';

import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import Logout from './Logout';
import View from './View';

const App = () => {
  // const [items, setItems] = useState([]);

  // useEffect(()=>{
  //   axios.get('http://localhost:5000/api/articles')
  //     .then(res => {
  //       setItems(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  const deleteArticles = (id) => {
    setItems(items.filter(item =>(item.id !== Number(id))));
  }
 
  return (
    <AppContainer>
      <BloomHeader/>
      <Header/>
      <RouteContainer>
      <Switch>
        <PrivateRoute path="/logout" component={Logout}/>
        <PrivateRoute path="/view" component={View} deleteArticles={deleteArticles}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Login}/>
      </Switch>
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
