import React from "react";

class MovieReviews extends React.Component {
    render() {
        return (
            <div className="review">
                <h4>{this.props.review.headline}</h4>
                <h5>By: {this.props.review.byline}</h5>

                <p>
                    {this.props.review.title}, Rated: {this.props.review.mpaa_rating}, Opens: {this.props.review.opening_date}
                </p>
                <p>{this.props.review.summary}</p>
            </div>
        )
    }
}

export default MovieReviews