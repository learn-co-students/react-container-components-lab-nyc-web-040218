// Code MovieReviews Here
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const MovieReviews = (props) => {
  return(
    <div className='review-list'>
      {props.reviews.map(review => {
        return(
          <div key={review.headline} className="review">
            <ul>
              <li><h4>{review.headline}</h4></li>
              <li>By: {review.byline}</li>
              <li>Summary: {review.summary_short}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}
MovieReviews.defaultProps = {reviews: []}
export default MovieReviews;
