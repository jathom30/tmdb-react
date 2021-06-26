import requests from '../http'

export const getMovie = async (movieId: number) => {
  return await requests.get(`/movie/${movieId}`)
}

export const getSearchMovie = async (query: string) => {
  return await requests.get('/search/movie', { query })
}
