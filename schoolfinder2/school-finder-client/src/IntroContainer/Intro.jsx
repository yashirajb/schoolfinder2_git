
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import About from './About/About';
import Carousel from './Carousel';
// import AboutAlert from './AboutAlert/AboutAlert';


const Intro = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome, schoolsearcher</h1>

        <Carousel />
        <br />
        <br />
          <p className="lead"></p>
          {/* <div className="chicagoimage">
         <img src="https://i.imgur.com/9qBgthI.jpg" title="source: imgur.com" />
         </div> */}
         
        </Container>

        <Container fluid>

          <About />
       
        </Container>
        
      </Jumbotron>
    </div>

  );
};


export default Intro;