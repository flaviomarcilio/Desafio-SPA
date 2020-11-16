import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../movies/movie';
import { MovieService } from '../../../movies/movie.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movie: Movie;

  ngOnInit(): void {
    this.movie = this.movieService.retrieveById(1);

  }

}
