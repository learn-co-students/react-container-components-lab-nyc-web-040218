// Code SearchableMovieReviewsContainer Here

import React, {Component} from 'react'
import MovieReviews from './MovieReviews'

import 'isomorphic-fetch';
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component{

  constructor(props){
    super(props)

    this.state = {reviews:[], searchTerm: ""}
  }

  fetchling = term =>{
    fetch(BASE_URL.concat(this.state.searchTerm)).then(json=>json.json()).then(resp => this.setState({reviews: resp.results}))
  }

  searchling = (e) =>{
    this.setState({
      searchTerm: e.target.value
    })

    if (e.target.value.length > 4){
      this.fetchling(e.target.value)
    }
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <h2>Search Reviews:</h2>
        <input type="text" placeholder="search..." value={this.state.searchTerm} onChange={this.searchling}></input>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
    // fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?'+`query=$`+`api-key=${NYT_API_KEY}`)
