import { Switch, Route } from 'react-router-dom';
import React/* , { useContext } */ from 'react';
import Home from '../Pages/Home';
import Games from '../Pages/Games';
import Contact from '../Pages/Contact';
import About from '../Pages/About';

const MainRouter = () => (
  <Switch>
    <Route exact path="/" render={ () => <Home /> } />
    <Route exact path="/games" render={ () => <Games /> } />
    <Route exact path="/contact" render={ () => <Contact /> } />
    <Route exact path="/about" render={ () => <About /> } />
  </Switch>
);
export default MainRouter;