import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchterm: "",
      reviews: []
    }
  }

  handleSubmit = (event) => {
      event.preventDefault();

      const NYT_API_KEY = '633ec8630140412cbd6cda0fc99dcc30';
      const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
              + `api-key=${NYT_API_KEY}& query=${this.state.searchterm}`

        fetch(URL)
          .then(resp => resp.json())
          .then(json =>
          this.setState({
            reviews: json.results
          }))
    }

    handleChange = (event) => {
      this.setState({
        searchterm: event.target.value
      })
    }

  render() {
    console.log(this.state.searchterm);
    return (
      <div>
        <h1>Search for Reviews:</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}/>
          <input type='submit' value="Search!" />
        </form>
        <div className='searchable-movie-reviews'>
          {this.state.reviews.length > 0 ?  this.state.reviews.map(movie =>
          <MovieReviews key={movie.display_title} details={movie} />) : ""}
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
