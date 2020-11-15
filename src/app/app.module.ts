import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { CoreModule } from './core/core.module';
import { MovieModule } from './movies/movie.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Error404Component
  ],
  imports: [
    CoreModule,
    MovieModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule.forRoot([
      {
        path: 'movies/info/:id', component: CardComponent
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
