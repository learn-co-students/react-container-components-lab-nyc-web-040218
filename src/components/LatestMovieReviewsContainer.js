import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from "./MovieReviews"

const NYT_API_KEY = '633ec8630140412cbd6cda0fc99dcc30';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;




class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  componentDidMount = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(json => this.setState({
        reviews: json.results
      }))
  }

  render() {
    console.log(this.state.reviews);
    return (
      <div>
        <h1>Latest Reviews.</h1>
      <div className='review-list'>
        {this.state.reviews.map(movie =>
        <MovieReviews key={movie.display_title} details={movie} />)}
      </div>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
// Code LatestMovieReviewsContainer Here
