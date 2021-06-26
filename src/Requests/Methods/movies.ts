import requests from '../http'

export const getMovie = async (movieId: number) => {
  return await requests.get(`/movie/${movieId}`)
}
