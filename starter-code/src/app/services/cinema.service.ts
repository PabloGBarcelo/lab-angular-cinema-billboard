import { Injectable } from '@angular/core';
import moviesList from '../../sample-movies';

@Injectable()
export class CinemaService {
  movies = moviesList;
  constructor() { }
  ngOnInit() {
  }
  getMovies(){
    return this.movies;
  }

  getMovie(id){
    for (let x = 0; x < this.movies.length; x++){
      if (this.movies[x].id == id)
        return this.movies[x]
    }
  }
}
