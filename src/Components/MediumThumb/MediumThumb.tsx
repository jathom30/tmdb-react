import React from 'react'
import './MediumThumb.scss'

const posterPath = 'https://image.tmdb.org/t/p/original/'

export const MediumThumb: React.FC<{ thumbnail: string; onClick: () => void }> = ({ thumbnail, onClick }) => {
  return (
    <button type="button" className="MediumThumb">
      <img
        onClick={onClick}
        className="MediumThumb__img"
        src={`${posterPath}${thumbnail}`}
        alt="movie poster"
      />
    </button>
  )
}
