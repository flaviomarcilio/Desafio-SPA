import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component ({
    templateUrl: './movie.component.html'
})

export class MovieComponent implements OnInit {

    filteredMovies: Movie[] = [];

    _movies: Movie[] = [];
    _filterBy: string;

    constructor(private movieService: MovieService ) {}

    ngOnInit(): void {
        this._movies = this.movieService.retrieveAll();
        this.filteredMovies = this._movies;
    }

    set filter(value: string) {
        this._filterBy = value;
        this.filteredMovies = this._movies.filter((movie: Movie) => movie.titulo.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }

}