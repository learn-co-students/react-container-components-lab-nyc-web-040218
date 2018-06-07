import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';
require('es6-promise').polyfill();

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      movieTitle: '',
    }
  }

  getMovieFromSearch = (title) => {
    fetch(`${URL}api-key=${NYT_API_KEY}&query=${title}`)
      .then(res => res.json())
      .then(listings => {this.setState({
        listings: listings.results
      })})
  }

  handleTitleSearch = (e) => {
    this.setState({
      movieTitle: e.target.value
    }, () => {console.log('insde set state ',this.state.movieTitle)})
  }

  handleSearchFormSubmit = (e) => {
    e.preventDefault()
    this.getMovieFromSearch(this.state.movieTitle)
  }


  render() {
    return (
      <form onChange={this.handleTitleSearch} onSubmit={this.handleSearchFormSubmit}>
        <input type='text' name='movieTitle' value={this.state.movieTitle}></input>
        <MovieReviews MovieListings={this.state.listings}/>
      </form>
    )
  }

}

export default SearchableMovieReviewsContainer;
