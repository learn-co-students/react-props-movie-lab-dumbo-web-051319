import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(movie => {
      // console.log(movieData.length);
      return <MovieCard key={movie.title} title={movie.title} genres={movie.genres} rating={movie.IMDBRating} poster={movie.poster}/>
    })
    // map over your movieData array and return the correct
  }
  render() {
    console.log(this.generateMovieCards());
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>

    )
  }
}
