import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../../service/tvshow.service';
import { Tvshow } from 'src/app/movies/tvshow';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
  toratedmovie: Tvshow[]=[];
  poppularmovie: Tvshow[]=[];
  upcommingmovie: Tvshow[]=[];
  // latestmovie: Movie[]= [];
  nowPlaymovie: Tvshow[]=[]

  constructor(private tvshows: TvShowService) { }

  ngOnInit(): void {
    this.tvshows.gettvshow('popular').subscribe((respod:any)=>{
      this.poppularmovie = respod.results;
      // console.log(this.poppularmovie);
    });
  }

}
