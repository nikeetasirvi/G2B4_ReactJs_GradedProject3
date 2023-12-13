import axios from 'axios';
import { IMovie } from '../Models/movies';

const getMovies = (activeKey: string) => {
  return axios.get<IMovie[]>(`https://servermovies.atikinivris.repl.co/${activeKey}`)
    .then(response => {
      const data = response.data
      return data;
    })
}

const addMovieToFavourites = (movie: IMovie) => {
  return axios.post<IMovie>(
    'https://servermovies.atikinivris.repl.co/favourite',
    movie,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.data)
}

const removeMovieFromFavourites = (id: string) => {
  axios.delete(`https://servermovies.atikinivris.repl.co/favourite/${id}`)
    .then(response => {
      const data = response.data
      return data;
    })
}

export { getMovies, addMovieToFavourites, removeMovieFromFavourites }