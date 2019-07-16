import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {
    if(this.props.rating === null){
      return <h4>No Rating Found</h4>
    }
    else {
      return <img src = {imgMapper[this.props.rating]} alt=''/>
    }
    // implement meeeee! See the readme for instructions
  }

  generateGenre = () => {
    return this.props.genres.forEach(genre => {
      return genre
    })
  }

  render() {
    // debugger
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        {this.generateRatingElement()}
        <span />
        <h5 className="genres">{this.props.genres.join(', ')}</h5>
      </div>
    )
  }
}

// 1.  render the genres (as comma separated) strings
// 2.  render the title value
// 3.  Finish writing the method `generateRatingElement`, which should do the following:
//
// - if the IMDBRating prop is null, return an `<h4>` with the contents 'No Rating Found'
// - otherwise, return `<img src={imgMapper[prop]} alt="" />` (using the correct prop)
