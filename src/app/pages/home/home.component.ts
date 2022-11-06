import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movies/movies';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // movies: any = [];
  toratedmovie: Movie[]=[];
  poppularmovie: Movie[]=[];
  upcommingmovie: Movie[]=[];
  // latestmovie: Movie[]= [];
  nowPlaymovie: Movie[]=[]
  constructor(private movieser : MovieService) { }

  ngOnInit(): void {
    this.movieser.getmovies('popular').subscribe((Movie)=>{
      this.poppularmovie = Movie;
      // console.log(this.poppularmovie);
    });
    this.movieser.getmovies('now_playing').subscribe((Movie)=>{
      this.nowPlaymovie = Movie;
      // console.log(this.poppularmovie);
    });
    // this.movieser.getmovies('latest').subscribe((respod:any)=>{
    //   this.latestmovie = respod.results;
    //   // console.log(this.poppularmovie);
    // });
    this.movieser.getmovies('top_rated').subscribe((Movie)=>{
      this.toratedmovie = Movie;
      // console.log(this.poppularmovie);
    });
    this.movieser.getmovies('upcoming').subscribe((Movie)=>{
      this.upcommingmovie = Movie;
      // console.log(this.poppularmovie);
    });
  }

}
