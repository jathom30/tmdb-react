import requests from '../http'

export const getSearchMulti = async (query: string) => {
  return await requests.get('/search/multi', { query })
}

export const getSearchMovie = async (query: string) => {
  return await requests.get('/search/movie', { query })
}