import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { CoreModule } from './core/core.module';
import { MovieModule } from './movies/movie.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    CoreModule,
    MovieModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
