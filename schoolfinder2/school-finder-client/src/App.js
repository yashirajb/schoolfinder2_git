import React from 'react';
import './App.css';
import Schools from './Schools/Schools';
import 'bootstrap/dist/css/bootstrap.css';
import FooterContainer from './FooterContainer/FooterContainer';
import Header from './HeaderContainer/Header/Header';
import Intro from './IntroContainer/Intro';



function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <br />
      <br />
     <Schools />
     <FooterContainer />
    </div>
  );
}

export default App;
