import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

import './index.css';
import salon from '../../figure/salon_img1.jpg';

class Home extends Component {
  render() {
    return(
      <div className='Home'>
        <h1>Home</h1>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt='store' src={salon}/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt='store' src={salon}/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Home;