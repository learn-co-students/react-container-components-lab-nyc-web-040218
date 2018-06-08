import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      // books: []
    };
  }

  // componentDidMount() {
  //   fetch('/api/current_user/book_list')
  //     .then(response => response.json())
  //     .then((books => this.setState({ books }));
  // }

  render() {
    return (
      <div className="latest-movie-reviews">
        {}
      </div>
    )
    {/* <BookList books={this.state.books} /> */}
  }
}

export default LatestMovieReviewsContainer;