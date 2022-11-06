import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TvShowService {


  baseurl:string='https://api.themoviedb.org/3';
  apikeyurl: string= 'f3b5d5f4d03ec20ba4fba186b7a7ede7';

  constructor(private http : HttpClient) { }
  gettvshow(typetvshow: string='top_rated'){
   return this.http.get( `${this.baseurl}/tv/${typetvshow}?api_key=${this.apikeyurl}`)
  }
}
