import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js';

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return the correct
    // movieData.map((movie) =>
    //   <li> {movie.title}, </li>
    //   <li> {movie.IMDBRating} </li>
    //   <li> {movie.genres} </li>
    //   <li> {movie.poster} </li>
    // )
    return movieData.map((movie, i) => <MovieCard key={i} {...movie}  />)
    }

  render() {
    return (
      <div className="movie-showcase">
        {this.generateMovieCards()
        /* which component should receive which props? */}
      </div>
    )
  }
}
