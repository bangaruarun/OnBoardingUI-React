// @flow
import React from 'react';
import './App.scss';
import Navigation from '../Navigation/Navigation';
import UserHeader from '../UserHeader/UserHeader';
import UserContent from '../UserContent/UserContent';
import UserDetails from '../UserDetails/UserDetails';
import CardItem from '../Card/CardItem';
import Lower from '../Footer/Lower/Lower';
import Upper from '../Footer/Upper/Upper';
import MoreByUser from '../MoreByUser/MoreByUser';


const App = () => {
  return (
  <div className='app'>
    <Navigation />
    <div className='content-container'>
      <div className='shot-content-container'>
      <UserHeader />
      <UserContent />
      <UserDetails />
    <CardItem />
    <MoreByUser />
    
      
      </div>
    </div>
    <Upper />
    <Lower />
  </div>
  )
};


export default App;
