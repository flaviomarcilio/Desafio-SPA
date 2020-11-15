import { Component, Input, OnChanges } from '@angular/core';
import { Movie } from '../movies/movie';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['card.component.css']

})
export class CardComponent implements OnChanges {

    @Input()
    movie: Movie;
    // sinopse: string = '';

    ngOnChanges(): void {
    }
}