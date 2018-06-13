import React from "react";

const MovieReviews = (props) => {
  console.log(props.movie)
  return (
    <div className="review-list">
      <div className="review">
        <h4>{props.movie.display_title === undefined ? "N/A" : props.movie.display_title}</h4>
      </div>
    </div>
  );
}



export default MovieReviews;
