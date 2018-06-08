import React from 'react';
import MovieReviews from "./MovieReviews"

const NYT_API_KEY = '&api-key=81ce09e59d3e45c2a3d61aed433d92cc';
const sURL = 'http://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

class SearchableMovieReviewsContainer extends React.Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    logSearch = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    pullReviews = () => {
        
        fetch(sURL + this.state.searchTerm.replace(/\s/g, '+') + NYT_API_KEY)
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
            <div className="searchable-movie-reviews">
                <h1>Search Reviews:</h1>
                <input type="text" onChange={this.logSearch} value={this.state.searchTerm} /> <button onClick={this.pullReviews}>Search > </button>
                <p>&nbsp;</p>
                { moviesStructure }
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;