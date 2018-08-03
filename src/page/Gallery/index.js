import React, {Component} from 'react';
import FlexView from 'react-flexview';

import './index.css';

class Gallery extends Component {
  render() {
    return(
      <div className='Gallery'>
        <FlexView hAlignContent='center'>
          <h1>Gallery</h1>
        </FlexView>
        <FlexView wrap vAlignContent='top' hAlignContent='center'>
          <FlexView marginLeft={10} marginBottom={10} className='flex_block' vAlignContent='center' hAlignContent='center'>
            <img width={10} height={10} alt='image' src={'/'}/>
          </FlexView>
          <FlexView marginLeft={10} marginBottom={10}  className='flex_block' vAlignContent='center' hAlignContent='center'>
            <img width={10} height={10} alt='image' src={'/'}/>
          </FlexView>
          <FlexView marginLeft={10} marginBottom={10}  className='flex_block' vAlignContent='center' hAlignContent='center'>
            <img width={10} height={10} alt='image' src={'/'}/>
          </FlexView>
          <FlexView marginLeft={10} marginBottom={10} className='flex_block' vAlignContent='center' hAlignContent='center'>
            <img width={10} height={10} alt='image' src={'/'}/>
          </FlexView>
          <FlexView marginLeft={10} marginBottom={10}  className='flex_block' vAlignContent='center' hAlignContent='center'>
            <img width={10} height={10} alt='image' src={'/'}/>
          </FlexView>
          <FlexView marginLeft={10} marginBottom={10}  className='flex_block' vAlignContent='center' hAlignContent='center'>
            <img width={10} height={10} alt='image' src={'/'}/>
          </FlexView>
        </FlexView>
      </div>
    );
  }
}

export default Gallery;