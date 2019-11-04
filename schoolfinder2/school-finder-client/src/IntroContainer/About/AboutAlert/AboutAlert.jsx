import React from 'react';
import { UncontrolledAlert } from 'reactstrap';




function AboutAlert() {
    return (
      <UncontrolledAlert color="info">
       New to SchoolFiner? Click below to learn more <div className="edmodal"></div>
       <br></br>
       <AboutEdBoxModal />
      </UncontrolledAlert>
    );
  }
  
  export default AboutAlert;