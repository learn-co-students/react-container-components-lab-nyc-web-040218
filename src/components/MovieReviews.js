// Code MovieReviews Here

import React from 'react'
import PropTypes from 'prop-types'

const MovieReviews = (props) => {
  return(
    <div className='review-list'>
      <ul>
        {props.reviews.map(review =>
          <li key={review.display_title} className="review">
            <div>
            <h3>{review.display_title}</h3>
            <h5>{review.byline}</h5>
            <p>{review.summary_short}</p>
         </div>
       </li>)}
      </ul>
    </div>
    )
  }

MovieReviews.defaultProps = {
  reviews: PropTypes.array.isRequired
}
export default MovieReviews
