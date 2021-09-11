import React from 'react';
import * as Constants  from '../constants'

import altPhoto from '../images/alternateHomePhoto.png'

const home = () => {
  return (
    <>
      <div className='home-container'>
        <img className='home-photo' src={altPhoto} alt="altPhoto" />
        <div className='home-description-container'>
          <p className='description'>
            {Constants.HOME_DESCRIPTION}
          </p>
          <p className='description'>
            {Constants.HOME_DESCRIPTION_2}
          </p>
        </div>
      </div>
      <div className='built-tag'>
        <p>{Constants.BUILT_TAG}</p>
      </div>
    </>
  );
};
  
export default home;