import React, {Component} from 'react'
import MovieReviews from './MovieReviews';
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}` + "&query=";


class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();

    this.state={
      reviews: [],
      searchTerm: ""
    }
  }
  handleInputChange = (event) => {
    this.setState({ searchTerm : event.target.value}, () => {
      console.log("this.state.searchTerm");
    })
  }


  handleSubmit = (event) => {

    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(reviews=>{
        this.setState({reviews : reviews.results})
      })
  }


    render() {
        return (
            <div className="searchable-movie-reviews">
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleInputChange} type="text"/>
                <input type="submit"/>
              </form>
              <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer;
