import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieDataSet from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    // const x = movieDataSet
    // console.log(movieDataSet)
    // debugger
    return movieDataSet.map((dataPiece, index) => <MovieCard key={index} {...dataPiece} />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
