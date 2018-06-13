import React from "react";
import MovieReviews from "./MovieReviews.js"

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
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
    const movies = this.state.reviews.filter((movie) => {return movie.display_title.toLowerCase().includes(this.state.searchTerm)});
    const movieReviews = movies.map((movieObj) => { return <MovieReviews key={movieObj.id} movie={movieObj} />});

    return(
      <div className="searchable-movie-reviews">
        <label htmlFor="movie-search">Search for a movie:</label>
        <input type="text" name="movie-search" placeholder="Search for a movie" value={this.state.searchTerm} onChange={this.handleSearch}></input>
        {movieReviews}
      </div>
    );
  }
}
