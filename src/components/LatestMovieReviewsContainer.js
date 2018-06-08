import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from "./MovieReviews"
require('es6-promise').polyfill();
require('isomorphic-fetch');

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = '81ce09e59d3e45c2a3d61aed433d92cc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends React.Component {
    state = {
        reviews: []
    }


    componentWillMount() {
        fetch(URL)
            .then(res => res.json())
            .then(res => {
                for (const item in res.results) {
                    this.setState(prevState => ({
                        reviews: [...prevState.reviews, {
                            title: res.results[item].display_title,
                            opening_date: res.results[item].opening_date,
                            byline: res.results[item].byline,
                            headline: res.results[item].headline,
                            summary: res.results[item].summary_short,
                            mmUrl: res.results[item].multimedia["src"],
                            mpaa_rating: res.results[item].mpaa_rating
                        }]
                    }))
                }
            })
    }

    render() {
        
        let moviesStructure = this.state.reviews.map((review, index) => {
                return <MovieReviews key={index} review={review} />
            });

        return (
            <div className="review-list latest-movie-reviews">
                <h1 onClick={this.fetchData} >Latest Movie Reviews:</h1>
                { moviesStructure }
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;