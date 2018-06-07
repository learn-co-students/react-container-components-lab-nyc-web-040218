import React from 'react'

const MovieReviews = (props) => {
  return (
    <ol>
      {props.MovieListings.map(movie => {
        return <li>Title: {movie.display_title}, Rating: {movie.mpaa_rating}</li>
      })}
    </ol>
  )
}

export default MovieReviews;
