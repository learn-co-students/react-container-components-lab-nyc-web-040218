// Code SearchableMovieReviewsContainer Here
import React, { Component } from "react";

class SearchableMovieReviewsContainer extends Component {
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
      <div className="searchable-movie-reviews">
        {}
      </div>
    )
    {/* <BookList books={this.state.books} /> */}
  }
}

export default SearchableMovieReviewsContainer;