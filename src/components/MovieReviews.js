// Code MovieReviews Here
import React from 'react';
import UUID from 'uuid';

const MovieReviews = ({reviews}) => {
  return (
    <ol className="review-list">
      {reviews.map(review => <li key={UUID()} className="review">{review.display_title}</li>)}
    </ol>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
