import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGESIZE } from '../../constants/imagesize';
import { Movieactimages, MovieDetail, MovieImageDto, MovieVideo, MovieVideoDto, posterimage } from '../../movies/movies';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
[x: string]: any;
  moviesingle: MovieDetail | null= null;
  movievide: MovieVideo[] = [];
  movieimages: MovieImageDto | null = null;
  movieactimages: Movieactimages | null =null;
  imgsizes = IMAGESIZE;
  constructor(private routeing: ActivatedRoute, private movieserv: MovieService) { }

  ngOnInit(): void {
    this.routeing.params.subscribe(({id})=>{
      this.getmoviedetail(id);
      this.getMovideos(id);
      this.getmovieimg(id);
      this.getactimg(id);
    });
  }
  getmoviedetail(id:string){
    this.movieserv.getmovie(id).subscribe(moviedetail=> {
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

}
