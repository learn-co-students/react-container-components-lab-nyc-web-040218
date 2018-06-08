import React from "react";

const MovieReviews = ({review}) =>
    <div className="review">
        <h4>{review.headline}</h4>
        <h5>By: {review.byline}</h5>
        <p>
            {review.title}, Rated: {review.mpaa_rating}, Opens: {review.opening_date}
        </p>
        <p>{review.summary}</p>
    </div>;

export default MovieReviews