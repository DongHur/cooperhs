import React, {Component} from 'react';
import FlexView from 'react-flexview';

import './index.css';

class Contact extends Component {
  render() {
    return(
      <div className='Contact'>
        <FlexView column marginBottom={10} hAlignContent='center' className='contact_block'>
          <FlexView>
            <h1>Contact</h1>
          </FlexView>
          <hl />
          <FlexView column>
            <h3>Name</h3>
            <h3>Hours of Operation:</h3>
            <h3>Address:</h3>
            <h3>Location:</h3>
          </FlexView>
        </FlexView>
      </div>
    );
  }
}

export default Contact;