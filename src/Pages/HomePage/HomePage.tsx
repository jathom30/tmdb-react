import React, { useEffect, useState } from 'react'
import './HomePage.scss'
import { FlexBox, MediumThumb, MovieDisplay, Search, Spacer, Text, TVDisplay } from 'Components'
import { MovieType, MultiSearchType, TVType } from 'Types'
import { getTrending } from 'Requests'

export const HomePage = () => {
  const [current, setCurrent] = useState<MultiSearchType>()
  const [trendingMovies, setTrendingMovies] = useState<MovieType[]>([])
  const [trendingTV, setTrendingTV] = useState<TVType[]>([])

  useEffect(() => {
    getTrending('movie').then((res) => {
      setTrendingMovies(res.data.results)
    })
    getTrending('tv').then((res) => {
      setTrendingTV(res.data.results)
    })
  }, [])
  return (
    <div className="HomePage">
      <Search onSelect={setCurrent} />
      <Spacer />
      <Text on="white" weight="bold" size="xl">Trending Movies</Text>
      <Spacer height="0.5rem" />
      <div className="HomePage__side-scroll">
        <FlexBox>
          {trendingMovies.map((movie) => (
            <>
              <MediumThumb
                key={movie.id}
                thumbnail={movie.poster_path}
                onClick={() => setCurrent(movie)}
              />
              <div className="HomePage__spacer" />
            </>
          ))}
        </FlexBox>
      </div>
      <Spacer />
      <Text on="white" weight="bold" size="xl">Trending TV Shows</Text>
      <Spacer height="0.5rem" />
      <div className="HomePage__side-scroll">
        <FlexBox>
          {trendingTV.map((tv) => (
            <>
              <MediumThumb
                key={tv.id}
                thumbnail={tv.poster_path}
                onClick={() => setCurrent(tv)}
              />
              <div className="HomePage__spacer" />
            </>
          ))}
        </FlexBox>
      </div>
      {current?.media_type === 'movie' && <MovieDisplay movie={current} />}
      {current?.media_type === 'tv' && <TVDisplay tv={current} />}
    </div>
  )
}
