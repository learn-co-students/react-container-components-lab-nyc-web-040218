import React from "react";

class MovieReviews extends React.Component {
    render() {
        return (
            <div className="review-list">
                <div className="review">
                    <h1>{this.props.movie.title}</h1>
                </div>
            </div>
        )
    }
}

export default MovieReviews;