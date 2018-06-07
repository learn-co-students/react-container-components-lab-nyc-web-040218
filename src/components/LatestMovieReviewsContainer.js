import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from "./MovieReviews"
require('es6-promise').polyfill();
require('isomorphic-fetch');

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = '81ce09e59d3e45c2a3d61aed433d92cc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// const myObj = [];
// let doc = [];
// function loadHtml(){
//     doc = myObj.map((movie, index) => {
//         return <MovieReviews key={index} movie={movie} />
//     })
// }
// doc = this.state.movies.map((movie, index) => {
//     return <MovieReviews key={index} movie={movie} />
// });

// fetch(URL).then( response => response.json() ).then(array => {
//     for (const item in array.results){
//         myObj.push({
//             title: array.results[item].display_title,
//             opening_date: array.results[item].opening_date,
//             byline: array.results[item].byline,
//             headline: array.results[item].headline,
//             summary: array.results[item].summary_short,
//             mmUrl: array.results[item].multimedia["src"],
//             mpaa_rating: array.results[item].mpaa_rating
//         })
//     }
// }).then( loadHtml() )


class LatestMovieReviewsContainer extends React.Component {
    state = {
        movies: [{title: "Loading movies..."}]
    }
    
    myObj = [];

    otherObj = [{title: "...still loading..."}]

    fetchData = () => {
        fetch(URL).then(response => response.json()).then(array => {
            for (const item in array.results) {
                this.myObj.push({
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
    }

    // gettingReviews() {
    //     fetch(URL)
    //         .then(res => res.json())
    //         .then(movies => this.setState({ movies: movies.results }));
    // }

    componentWillMount() {
        fetch(URL)
            .then(res => res.json())
            .then(movies => this.setState({ movies: movies.results }));
    }

    logThis = () => {
        // console.log(this.myObj)
        this.setState({
            movies: this.myObj
        })
    }
    checkaDis = () => {
        console.log(this.state.movies)
    }

    render() {
        let moviesStructure = this.state.movies.map((movie, index) => {
                return <MovieReviews key={index} movie={movie} />
            })
        return (
            <div>
                <h1 onClick={this.fetchData} >Load Now ></h1>
                <h1 onClick={this.logThis} >double check></h1>
                <h1 onClick={this.checkaDis} >triple check check></h1>
                { moviesStructure }
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;