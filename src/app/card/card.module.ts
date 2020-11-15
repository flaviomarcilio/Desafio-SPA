import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        RouterModule.forChild([
            {
                path: 'movies/info/:id', component: CardComponent
            }
        ])
    ]
})

export class CardModule { }