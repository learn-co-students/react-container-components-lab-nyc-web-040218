// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5b305ce210f74ed4aa99d947cbdbc120';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
            + `api-key=${NYT_API_KEY}`;

    export class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         searchTerm: '',
         reviews: []
      }
    }

handleSearchInputChange = event => {this.setState({searchTerm: event.target.value})}
    
handleSubmit = event => {
    event.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({reviews: res.results}))
}

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='search-input'>Search Movie Reviews</label>

          <input
            id='search-input'
            type="text"
            style={{width: 300}}

            onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />

      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
