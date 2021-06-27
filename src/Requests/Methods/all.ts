import requests from '../http'

export const getTrending = async (mediaType: 'all' | 'movie' | 'tv' | 'person') => {
  return await requests.get(`/trending/${mediaType}/week`)
}
