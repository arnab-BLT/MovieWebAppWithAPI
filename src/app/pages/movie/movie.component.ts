import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { IMAGESIZE } from '../../constants/imagesize';
import { Movie, Movieactimages, MovieDetail, MovieImageDto, MovieVideo, MovieVideoDto, posterimage } from '../../movies/movies';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  // [x: string]: any;
  moviesingle: MovieDetail | null= null;
  movievide: MovieVideo[] = [];
  movieimages: MovieImageDto | null = null;
  movieactimages: Movieactimages | null =null;
  simmovies: Movie[]=[];
  imgsizes = IMAGESIZE;
  constructor(private routeing: ActivatedRoute, private movieserv: MovieService) { }

  ngOnInit(): void {
    this.routeing.params.subscribe(({id})=>{
      this.getmoviedetail(id);
      this.getMovideos(id);
      this.getmovieimg(id);
      this.getactimg(id);
      this.getsimmovies(id);
    });
  }

  getmoviedetail(id:string){
    this.movieserv.getmovie(id).pipe(first()).subscribe(moviedetail=> {
      this.moviesingle = moviedetail;
    })
  }

  // getmovieimage(id:string){
  //   this.movieserv.getmovieimage(id).subscribe(movieimaged=> {
  //     this.movieimages = movieimaged;
  //     // console.log(this.movieimages)
  //   })
  // }
  getmovieimg(id: string){
    this.movieserv.getmovieimages(id).subscribe((movieimagesdata)=>{
      this.movieimages = movieimagesdata;
    })
  }
  getactimg(id: string){
    this.movieserv.getactimages(id).subscribe((movieimagesdata)=>{
      this.movieactimages = movieimagesdata;
      console.log(this.movieactimages);
    })
  }
  getMovideos(id:string) {
    this.movieserv.getmovievideos(id).subscribe(movievidep =>{
      this.movievide = movievidep;
      // console.log(movievidep);
    })
  }
  getsimmovies(id:string){
    this.movieserv.getsimmovies(id).subscribe((listsimmovies)=>{
      this.simmovies = listsimmovies;
      // console.log(this.poppularmovie);
    });
  }
  ngOnDestroy(): void {
    console.log('Destroy successfully');
  }

}
