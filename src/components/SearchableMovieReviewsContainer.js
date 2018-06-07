// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews.js'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const search = this.state.searchTerm.replace(" ", "%20");
    fetch(URL + search).then(r => r.json()).then(reviews => this.setState({reviews: reviews.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form  onSubmit={this.handleSubmit}>
          Enter your search:
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <button>Search</button>
        </form>
        <h2>Search Results:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
};
