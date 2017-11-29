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
    return this.movies.filter(e=> e.id == id)[0];
  }
}
