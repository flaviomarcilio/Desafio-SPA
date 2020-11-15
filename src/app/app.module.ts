import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movies/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CardComponent,
    Error404Component
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule.forRoot([
      {
        path: 'movies', component: MovieComponent
      },
      {
        path: 'movies/info/:id', component: CardComponent
      },
      {
        path: '', redirectTo: 'movies', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
