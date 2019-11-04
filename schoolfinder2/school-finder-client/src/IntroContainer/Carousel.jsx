import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


// function Carousel(){
    
    const items = [
        {
          src: 'https://i.imgur.com/9qBgthI.jpg',
        //   altText: 'Slide 1',
        //   caption: 'Slide 1',
        //   header: 'Slide 1 Header',
          key: '1'
        },
        {
          src: 'https://i.imgur.com/9XSChXJ.jpg?4',
          key: '2'
        },
        {
          src: 'https://i.imgur.com/MwrbHPd.jpg?1',   
          key: '3'
        }
      ];


// }


const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;