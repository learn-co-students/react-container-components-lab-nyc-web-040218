import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from "./MovieReviews"

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = '81ce09e59d3e45c2a3d61aed433d92cc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

const myObj = [];

fetch(URL).then( response => response.json() ).then(array => {
    for (const item in array.results){
        myObj.push({
            title: array.results[item].display_title,
            opening_date: array.results[item].opening_date,
            byline: array.results[item].byline,
            headline: array.results[item].headline,
            summary: array.results[item].summary_short,
            mmUrl: array.results[item].multimedia["src"],
            mpaa_rating: array.results[item].mpaa_rating
        })
    }
})


class LatestMovieReviewsContainer extends React.Component {
    state = {
        movies: myObj
    }

    logMe = () => {
        console.log(this.doc)
    }

    logThis = () => {
        console.log(this.state.movies)
    }

    // doc = this.state.movies.map((movie, index) => {
    //     return <MovieReviews key={index} movie={movie} />
    // });

    render() {
        return (
            <div>
                <h1 onClick={this.logMe} >Load Movies…</h1>
                {doc}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;