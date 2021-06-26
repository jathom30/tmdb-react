import { MoviePage, HomePage } from 'Pages'

const routes = [
  { path: '/', component: HomePage },
  { path: '/movie/:movieId', component: MoviePage },
]

export default routes
