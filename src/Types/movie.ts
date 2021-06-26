export type MovieType = {
  adult: boolean
  backdrop_path: null | string
  genre_ids: number[]
  id: number
  media_type: 'movie'
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type TVType = {
  backdrop_path: null | string
  first_air_date: string
  genre_ids: number[]
  id: number
  media_type: 'tv'
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export type PersonType = {
  id: number
  profile_path: string
  adult: boolean
  media_type: 'person'
  known_for_department: string
  known_for: (MovieType | TVType)[]
  name: string
  popularity: number
}

export type MultiSearchType = MovieType | TVType | PersonType
