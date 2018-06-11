import React, { Component } from 'react'
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleSearchTerm = (event) => {
        const searchTerm = event.target.value
        this.setState({ searchTerm })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch((URL+this.state.searchTerm)).then(response => response.json())
        .then(data => {
            const reviews = data.results
            this.setState( { reviews } )
        })
    }

    render(){

        return(
            <div className="searchable-movie-reviews">
                <h1> Searchable Reviews</h1>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="text" className="input" value={this.state.searchTerm} onChange={this.handleSearchTerm}/>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
