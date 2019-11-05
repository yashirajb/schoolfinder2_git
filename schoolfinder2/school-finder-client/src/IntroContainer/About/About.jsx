import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import AboutSchooFinderModal from './SchoolFinderModal/SchoolFinderModal';




function About() {
    return (
      <UncontrolledAlert color="info">
       New to The Chicago SchoolFinder App? Click below to learn more <div className="edmodal"></div>
       <br></br>
    
       <AboutSchooFinderModal />

      </UncontrolledAlert>
    );
  }
  
  export default About;