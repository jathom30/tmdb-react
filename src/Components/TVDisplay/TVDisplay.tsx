import React from 'react'
import { TVType } from 'Types'
import { Text, Spacer } from 'Components'
import './TVDisplay.scss'

const posterPath = 'https://image.tmdb.org/t/p/original/'

export const TVDisplay: React.FC<{ tv: TVType }> = ({ tv }) => {
  return (
    <div className="TVDisplay">
      <img
        className="TVDisplay__backdrop"
        src={`${posterPath}${tv.backdrop_path}`}
        alt="tv backdrop"
      />
      <div className="TVDisplay__body">
        <img
          className="TVDisplay__poster"
          src={`${posterPath}${tv.poster_path}`}
          alt="TV poster"
        />
        <Spacer />
        <Text on="white">{tv.overview}</Text>
      </div>
    </div>
  )
}
