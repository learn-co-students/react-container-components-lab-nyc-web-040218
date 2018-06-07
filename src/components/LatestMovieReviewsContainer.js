import React, { Component } from 'react';
import MovieReviews from './MovieReviews.js'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL).then(r => r.json()).then(reviews => this.setState({reviews: reviews.results}))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>Latest Movie Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
};
