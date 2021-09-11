import React from 'react';
import * as Constants  from '../constants'
import contactPhoto from '../images/contactPhoto.jpg'  

const contact = () => {
  return (
    <div>
      <h3 className='contact-title'>{Constants.CONTACT_TITLE}</h3>
      <div className='contact-email'>
        <a href="mailto:marcusjonwills@gmail.com">{Constants.CONTACT_EMAIL}</a>
      </div>
      <img className='contact-photo' src={contactPhoto} alt="contactPhoto" />
    </div>
  );
};
  
export default contact;