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
    <Route exact path="/" render={ (props) => <Home {...props} /> } />
    <Route exact path="/projects" render={ (props) => <Projects {...props} /> } />
    <Route exact path="/games" render={ (props) => <Games {...props} /> } />
    <Route exact path="/contact" render={ (props) => <Contact {...props} /> } />
    <Route exact path="/about" render={ (props) => <About {...props} /> } />
    <Route exact path="/explore" render={ (props) => <Explore {...props} /> } />
  </Switch>
);
export default MainRouter;