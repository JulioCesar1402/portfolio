import { Switch, Route } from 'react-router-dom';
import React/* , { useContext } */ from 'react';
import Home from '../Pages/Home';
import Games from '../Pages/Games';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Explore from '../Pages/Explore';

const MainRouter = () => (
  <Switch>
    <Route exact path="/" render={ () => <Home /> } />
    <Route exact path="/projects" render={ () => <Projects /> } />
    <Route exact path="/games" render={ () => <Games /> } />
    <Route exact path="/contact" render={ () => <Contact /> } />
    <Route exact path="/about" render={ () => <About /> } />
    <Route exact path="/explore" render={ () => <Explore /> } />
  </Switch>
);
export default MainRouter;