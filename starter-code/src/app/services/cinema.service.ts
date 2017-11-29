import { Injectable } from '@angular/core';
interface moviesInterface{
  id:number,
  title:string,
  poster:string,
  synopsis:string,
  genres:Array<string>,
  year:number,
  director:string,
  actors:Array<string>,
  hours:Array<string>,
  room:number
}
@Injectable()
export class CinemaService {
  movies:Array<moviesInterface>;
  constructor() { }

  getMovies(){
    return this.movies;
  }

  getMovie(id){
    return this.movies.filter(e => e.id==id);
  }
}
