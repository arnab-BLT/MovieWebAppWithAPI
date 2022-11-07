import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, Movieactimages, MovieDetail, MovieDto, MovieImageDto, MovieVideoDto } from '../movies/movies'
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MoviegenresDto } from '../movies/genres';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseurl:string='https://api.themoviedb.org/3';
  apikeyurl: string= 'f3b5d5f4d03ec20ba4fba186b7a7ede7';

  constructor(private http : HttpClient) { }
  getmovies(typemov: string='top_rated', count: number= 4){
   return this.http.get<MovieDto>( `${this.baseurl}/movie/${typemov}?api_key=${this.apikeyurl}`).pipe(switchMap(res =>{
    return of(res.results.slice(0, count));
   }));
  }
  getsimmovies(id: string, count: number= 4){
    return this.http.get<MovieDto>( `${this.baseurl}/movie/${id}/similar?api_key=${this.apikeyurl}`).pipe(switchMap(res =>{
     return of(res.results.slice(0, count));
    }));
   }
  getmovievideos(id: string){
    return this.http.get<MovieVideoDto>( `${this.baseurl}/movie/${id}/videos?api_key=${this.apikeyurl}`).pipe(switchMap(res =>{
     return of(res.results);
    }));
  }
  getmoviesgenres(){
    return this.http.get<MoviegenresDto>( `${this.baseurl}/genre/movie/list?api_key=${this.apikeyurl}`).pipe(switchMap(res =>{
     return of(res.genres);
    }));
  }
  getBygenres(genreId: string,page: number){
    return this.http.get<MovieDto>( `${this.baseurl}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apikeyurl}`).pipe(switchMap(res =>{
     return of(res.results);
    }));
   }
  // getmovieimage(id: string){
  //   return this.http.get<MovieImageDto>( `${this.baseurl}/movie/${id}/videos?api_key=${this.apikeyurl}`).pipe(switchMap(res =>{
  //    return of(res.posters);
  //   }));
  // }

  getmovie(id: string){
    return this.http.get<MovieDetail>( `${this.baseurl}/movie/${id}?api_key=${this.apikeyurl}`);
  }
  getmovieimages(id: string){
    return this.http.get<MovieImageDto>( `${this.baseurl}/movie/${id}/images?api_key=${this.apikeyurl}`);
  }
  getactimages(id: string){
    return this.http.get<Movieactimages>( `${this.baseurl}/movie/${id}/credits?api_key=${this.apikeyurl}`);
  }
  searchmovies(page:number, serchitem?: string){
    const uriid = serchitem ? '/search/movie' : '/movie/popular';
    return this.http.get<MovieDto>( `${this.baseurl}${uriid}?page=${page}&query=${serchitem}&api_key=${this.apikeyurl}`).pipe(switchMap(res =>{
     return of(res.results);
    }));
   }
  //  searchmovie(page:number,query:string){
  //   return this.http.get<MovieDto>( `${this.baseurl}/movie/movie?page=${page}&api_key=${this.apikeyurl}`).pipe(switchMap(res =>{
  //    return of(res.results);
  //   }));
  //  }
}
