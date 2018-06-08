import React, {Component} from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


// Code LatestMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  constructor(props){
    super (props)

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.children[0].value
    }, () => {
      fetch(URL+this.state.searchTerm)
      .then(response => response.json())
      .then(data => {
        const reviews = data.results
        this.setState({reviews})
      })
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
      <h1>Search Movies</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>

    )
  }

}
