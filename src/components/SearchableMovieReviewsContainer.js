// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component{

  constructor(props){
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSubmit = e => {

    e.preventDefault()

    fetch(URL + this.state.searchTerm)
    .then(res => res.json())
    .then(resp => this.setState({reviews: resp.results}))
  }

  logger = e => {e.preventDefault()
    console.log(this.state.searchTerm)
  }

  handleChange = e => this.setState({searchTerm: e.target.value})

  render(){
    return(
      <div className='searchable-movie-reviews'><h3>Search our Movie Reviews:</h3>
        <form>
          <input placeholder='Input Search Term' onChange={this.handleChange}></input>
          <button type='submit'onClick={this.handleSubmit}>Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
