import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';
require('es6-promise').polyfill();

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
    }
  }

  componentDidMount() {
    fetch(`${URL}`)
      .then(res => res.json())
      .then(listings => this.setState({
        listings: listings.results
      }))
  }

  render() {
    return (
      <MovieReviews MovieListings={this.state.listings} />
    )
  }
}

export default LatestMovieReviewsContainer;
