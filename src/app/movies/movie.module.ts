import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MovieComponent } from './movie.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [
        MovieComponent
    ],
    imports: [
        MatGridListModule,
        CoreModule,
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