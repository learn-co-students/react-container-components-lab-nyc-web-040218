import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <h3>Search By Movie</h3>
    <SearchableMovieReviewsContainer />
    <h3>Most Recent Movies</h3>
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);
