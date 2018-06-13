import React, { Component } from 'react';

const MovieReviews = (props) => {
    return (
      <div className='review'>
        <h3>{props.details.display_title}</h3>
        {!props.details.multimedia ? "no image" : <img src={props.details.multimedia.src} /> }
        <p>Rated: {props.details.mpaa_rating === "" ? "Not Rated" : props.details.mpaa_rating}</p>
        <p>{props.details.critics_pick === 0 ? "" : <b>Critic's Pick</b>} </p>
      </div>
    )
  }

export default MovieReviews
