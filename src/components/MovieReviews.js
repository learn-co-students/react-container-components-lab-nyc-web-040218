import React from 'react';

const MovieReviews = (({reviews}) => {
  return(
    <div className="review-list">
      {reviews.map((review, key) => {
        return (
          <div className="review" key={review.display_title}>
            <h2>{review.display_title}</h2>
            <h3>{review.headline}</h3>
            <i>{review.summary_short}</i>
          </div>
        )
      })}
    </div>
  )
})

MovieReviews.defaultProps = {reviews: []}

export default MovieReviews;
