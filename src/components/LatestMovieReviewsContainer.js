import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from "./MovieReviews.js";

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
       reviews: []
     }
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {this.setState({
        reviews: data.results
      }, () => console.log(this.state.reviews))
    });
  }

  render() {
    const movieReviews = this.state.reviews.map((movieObj) => <MovieReviews key={movieObj.id} movie={movieObj}/>);;

    return (
      <div className="latest-movie-reviews">
        {movieReviews}
      </div>
    );
  }
}
