import React from 'react';
import * as Constants  from '../constants'

import altPhoto from '../images/alternateHomePhoto.png'
import gitHubPhoto from '../images/GitHub-Mark-120px-plus.png'
import linkedInPhoto from '../images/LI-In-Bug.png'
import mobilePhoto from '../images/personalsitephoto.png'

const home = () => {
  return (
    <>
      <div className='home-container'>
        <img className='home-photo' src={altPhoto} alt="altPhoto" />
        <img className='mobile-photo' src={mobilePhoto} alt="mobilePhoto" />
        <div className='home-description-container'>
          <p className='description'>
            {Constants.HOME_DESCRIPTION}
          </p>
          <p className='description'>
            {Constants.HOME_DESCRIPTION_2}
          </p>
        </div>
      </div>
      <div className='footer'>
        <div className='links'>
          <a href="https://github.com/marcuswills">
            <img alt="GithubLogo" src={gitHubPhoto}/>
          </a>
          <a href="https://www.linkedin.com/in/marcus-wills-b5400a116/">
            <img alt="LinkedInLogo" src={linkedInPhoto}/>
          </a>
        </div>
        <div className='built-tag'>
          <span>{Constants.BUILT_TAG}</span>
        </div>
      </div>
    </>
  );
};
  
export default home;