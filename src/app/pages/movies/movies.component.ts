import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../movies/movies';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

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
  genreId: string | null= null;
  serchitem: string | null = null
  constructor(private movieservs : MovieService, private routgenre : ActivatedRoute) { }



  ngOnInit(): void {
    // this.serchimtem ="Arnab Roy";
    this.routgenre.params.pipe(take(1)).subscribe(({genreId})=> {
      if(genreId) {
        this.genreId=genreId;
        this.genrebyId(genreId,1);
      }else {
        this.getpagenumber(1);
      }
    })


  }
  getpagenumber(page:number, serchval?: string){
    this.movieservs.searchmovies(page, serchval).subscribe(movies=>{
      this.pagemovies=movies;
    })
  }
  genrebyId(genreId:string, page:number) {
    this.movieservs.getBygenres(genreId,page).subscribe(geresmovie=>{
      this.pagemovies=geresmovie;
    })
  }
  paginate(event:any){
    console.log(event);
    const eventpage =event.page + 1;
    if(this.genreId){
      this.genrebyId(this.genreId,eventpage);
    }else if(this.serchitem){
      this.getpagenumber(eventpage,this.serchitem);
    } else {
      this.getpagenumber(eventpage);
    }

  }

  getserchresult() {
    console.log(this.serchitem);
    if(this.serchitem){
      this.getpagenumber(1,this.serchitem);
    }
  }
}
