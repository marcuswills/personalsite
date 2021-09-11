import React from 'react';
import ReadingList from './elements/readinglist';
import bookList from './elements/bookList.json';
import * as Constants from '../constants'




const recreads = () => {

  return (
    <div>
      <div className='general-books'>
        <h3>{Constants.READING_LIST_GENERAL_TITLE}</h3>
        <ReadingList bookData={bookList.generalBooks} />
      </div>
      <div className='leadership-books'>
        <h3>{Constants.READING_LIST_LEADERSHIP_TITLE}</h3>
        <ReadingList bookData={bookList.leadershipBooks} />
      </div>
      <div className='explicit-books'>
        <h3>{Constants.READING_LIST_EXPLICIT_TITLE}</h3>
        <p className='subtitle'>{Constants.READING_LIST_EXPLICIT_SUBTITLE}</p>
        <ReadingList bookData={bookList.explicitBooks} />
      </div>
  </div>
  );
};
  
export default recreads;