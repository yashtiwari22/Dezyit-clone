import React from 'react';
import { Switch,Route } from 'react-router';
import './App.css';
import Home from './Components/Home/Home';
import WhyUs from './Components/WhyUs/WhyUs';
import Product from './Components/Product/Product';
import Blogs from './Components/Blogs/Blogs';
import Contacts from './Components/Contacts/Contacts';
function App() {
  return (<>
  
  
    <Route exact path="/" component={Home}/>
    </>
  );
}

export default App;
