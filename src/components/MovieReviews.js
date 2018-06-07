import React from "react";

class MovieReviews extends React.Component {
    render() {
        return (
            <div className="review">
                <h4>{this.props.movie.headline}</h4>
                <h5>By: {this.props.movie.byline}</h5>

                <p>
                    {this.props.movie.title}, Rated: {this.props.movie.mpaa_rating}, Opens: {this.props.movie.opening_date}<br>
                </p>
                <p>{this.props.movie.summary}</p>
            </div>
        )
    }
}

export default MovieReviews