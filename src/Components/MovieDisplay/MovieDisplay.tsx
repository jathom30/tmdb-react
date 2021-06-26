import { Text, Spacer, Button } from 'Components'
import React, { useState } from 'react'
import { getMovie } from 'Requests'
import { MovieType } from 'Types'
import './MovieDisplay.scss'

const posterPath = 'https://image.tmdb.org/t/p/original/'

export const MovieDisplay: React.FC<{ movie: MovieType }> = ({ movie }) => {
  return (
    <div className="MovieDisplay">
      <img
        className="MovieDisplay__backdrop"
        src={`${posterPath}${movie.backdrop_path}`}
        alt="movie backdrop"
      />
      <div className="MovieDisplay__body">
        <img
          className="MovieDisplay__poster"
          src={`${posterPath}${movie.poster_path}`}
          alt="movie poster"
        />
        <Text on="white" size="xxxl">{movie.title}</Text>
        <Text on="white">{movie.release_date}</Text>
      </div>
    </div>
  )
}
