import React from 'react'
 //import PropTypes from 'prop-types'
 // import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';

 const MovieReviews =  ({reviews})=> {

   // <img src={rev.multimedia.src} alt=""/>
   return (
     <div className="review-list">
         {(reviews ===[]) ? "loading" : reviews.map(rev=>{
           return <div key={rev.headline}>

             <h2>{rev.display_title}</h2>
             <p>{rev.summary_short}</p>
           </div>
         })}
     </div>
   );
}
MovieReviews.defaultProps = {
  reviews : []
}
 export default MovieReviews;
