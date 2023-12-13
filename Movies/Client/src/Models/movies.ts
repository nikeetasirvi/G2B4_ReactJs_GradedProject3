export interface IMovie {
  id: string,
  title: string,
  year: string,
  genres: string[],
  ratings: number[],
  poster: string,
  contentRating: string,
  duration: string,
  releaseDate: Date,
  averageRating: number,
  originalTitle: string,
  storyline: string,
  actors: string[],
  imdbRating: number,
  posterurl: string
}

export interface IMovies {
  movies: IMovie[]
}