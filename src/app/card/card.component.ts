import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movies/movie';
import { MovieService } from '../movies/movie.service';

@Component({
    templateUrl: './card.component.html',
    styleUrls: ['card.component.css']

})
export class CardComponent implements OnInit {

    movie: Movie;

    constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

    ngOnInit(): void {
        this.movie = this.movieService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
        
    }
}