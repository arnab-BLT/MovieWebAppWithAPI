import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "movies",
    component: MoviesComponent
  },
  {
    path: "movies/genres/:genreId",
    component: MoviesComponent
  },
  {
    path: "movie/:id",
    component: MovieComponent
  },
  {
    path: "tvshow",
    component: TvshowsComponent
  },
  {
    path: "geners",
    component: GenresComponent
  },
  {
    path: "**",
    redirectTo: 'movies'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
