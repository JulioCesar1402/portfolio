import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import MainRouter from './Router/MainRouter';
import './Style/Style.css'
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <div className="App">
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'></link>
        <NavBar />
        <MainRouter />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
