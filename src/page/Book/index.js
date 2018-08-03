import React, {Component} from 'react';
import FlexView from 'react-flexview';

import './index.css';

class Book extends Component {
  render() {
    return(
      <FlexView column hAlignContent='center' marginBottom={10} className='Book'>
        <h1>Book</h1>
        <h3>Coming Soon!</h3>
      </FlexView>
    );
  }
}

export default Book;