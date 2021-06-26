import React, { useState } from 'react'
import './HomePage.scss'
import { MovieDisplay, Search, Spacer } from 'Components'
import { MovieType } from 'Types'

export const HomePage = () => {
  const [currentMovie, setCurrentMovie] = useState<MovieType>()
  return (
    <div className="HomePage">
      <Search onSelect={setCurrentMovie} />
      <Spacer />
      {currentMovie && <MovieDisplay movie={currentMovie} />}
    </div>
  )
}
