import React from "react";

class MovieReviews extends React.Component {
    render() {
        return (
            <div className="review-list">
                <div className="review">
                    <h4>{this.props.movie.title}</h4>
                </div>
            </div>
        )
    }
}

export default MovieReviews;