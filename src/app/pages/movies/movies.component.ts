import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../movies/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  // toratedmovie: Movie[]=[];
  // poppularmovie: Movie[]=[];
  // upcommingmovie: Movie[]=[];
  // latestmovie: Movie[]= [];
  // nowPlaymovie: Movie[]=[]
  pagemovies: Movie[] =[]
  constructor(private movieservs : MovieService) { }



  ngOnInit(): void {
    this.getpagenumber(1);
  }
  getpagenumber(page:number){
    this.movieservs.searchmovies(page).subscribe(movies=>{
      this.pagemovies=movies;
    })
  }
  paginate(event:any){
    console.log(event);
    this.getpagenumber(event.page + 1);
  }

}
