import requests from '../http'

export const getLatestMovie = async () => {
  return await requests.get('/movie/latest')
}
