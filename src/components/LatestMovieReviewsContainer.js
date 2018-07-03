import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5b305ce210f74ed4aa99d947cbdbc120';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export class LatestMovieReviewsContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         reviews: []
      }
    }
    
    componentWillMount() {
        fetch(URL)
            .then(res => res.json())
            .then(res => this.setState({reviews: res.results}))
    }

    render() {
    return (
      <div className="latest-movie-reviews">
        <h2>Most Revent Movie Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer


