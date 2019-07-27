import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'




export default class MovieShowcase extends Component {
  //
  // generateMovieCards = () => {
  //   // map over your movieData array and return the correct
  //
  // }
  render() {
    const stuff = movieData.map( d => {
      return <MovieCard key={d.title} title={d.title} IMDBRating={d.IMDBRating} genres={d.genres} poster={d.poster}/>
    })

    console.log(movieData);

    return (
      <div id="movie-showcase">
        {stuff}
      </div>
    )
  }
}
