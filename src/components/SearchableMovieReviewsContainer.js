import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from "./MovieReviews"
require('es6-promise').polyfill();
require('isomorphic-fetch');

class SearchableMovieReviewsContainer extends React.Component {
    render() {
        return (
            <div className="searchable-movie-reviews">
            </div>
        )
    }
}