import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component ({
    templateUrl: './movie.component.html'
})

export class MovieComponent implements OnInit {

    filteredMovies: Movie[] = [];

    _movies: Movie[] = [];
    // _filterBy: number;

    constructor(private movieService: MovieService) {}

    ngOnInit(): void {
        this._movies = this.movieService.retrieveAll();
        this.filteredMovies = this._movies;
    }

    /* set filter(value: number) {
        this._filterBy = value;
        this.filteredMovies = this._movies.filter((movie: Movie) => movie.id === this._filterBy);
    }

    get filter() {
        return this._filterBy;
    } */

}