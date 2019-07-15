import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  // generateMovieCards = () => {
  //   movieData.map(movie => <MovieCard title={movie.title ? movie.title : 'Unknown'} imdb-rating={movie.IMDBRating ? movie.IMDBRating : null} genres={movie.genres ? movie.genres : 'No Genre(s) Found'} poster={movie.poster ? movie.poster : 'default'}/>);
  // }
  generateMovieCards = () => {
		return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
	};

  render() {

    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
