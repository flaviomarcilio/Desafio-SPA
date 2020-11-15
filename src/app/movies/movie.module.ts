import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';

@NgModule({
    declarations: [
        MovieComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', redirectTo: 'movies', pathMatch: 'full'
            },
            {
                path: 'movies', component: MovieComponent
            }
        ])
    ]
})

export class MovieModule { }