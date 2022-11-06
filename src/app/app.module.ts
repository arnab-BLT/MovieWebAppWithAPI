import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GenersComponent } from './pages/geners/geners.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component'
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './component/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemBannerComponent } from './component/item-banner/item-banner.component';
import { MovieItemComponent } from './component/movie-item/movie-item.component';
import {PaginatorModule} from 'primeng/paginator';
import {TabViewModule} from 'primeng/tabview';
import { MovieComponent } from './pages/movie/movie.component';
import { VideoembadeComponent } from './component/videoembade/videoembade.component';
import {ImageModule} from 'primeng/image';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    GenersComponent,
    TvshowsComponent,
    SliderComponent,
    ItemBannerComponent,
    MovieItemComponent,
    MovieComponent,
    VideoembadeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
