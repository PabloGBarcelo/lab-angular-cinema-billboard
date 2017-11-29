import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../services/cinema.service';
@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movie;
  constructor(private route: ActivatedRoute,public listMovies: CinemaService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movie = this.listMovies.getMovie(params['id']));
  }

}
