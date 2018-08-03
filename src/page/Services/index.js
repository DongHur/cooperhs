import React, {Component} from 'react';
import FlexView from 'react-flexview';
import './index.css';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block_Lmargin: 50,
      block_Rmargin: 50,
      block_Bmargin: 20,
    };
  }

  render() {
    return(
      <div className='Services'>
        <FlexView hAlignContent='center'>
          <h1>Services</h1>
        </FlexView>
        <FlexView wrap vAlignContent='center' hAlignContent='center'>
          <FlexView marginLeft={this.state.block_Lmargin} marginRight={this.state.block_Rmargin} marginBottom={this.state.block_Bmargin} vAlignContent='center' hAlignContent='center' className='flex_block'>
            <ul>
              <li>content 1</li>
              <li>content 2</li>
              <li>content 3</li>
            </ul>
          </FlexView>
          <FlexView marginLeft={this.state.block_Lmargin} marginRight={this.state.block_Rmargin} marginBottom={this.state.block_Bmargin} vAlignContent='center' hAlignContent='center' className='flex_block'>
            <ul>
              <li>content 1</li>
              <li>content 2</li>
              <li>content 3</li>
            </ul>
          </FlexView>
        </FlexView>
      </div>
    );
  }
}

export default Services;