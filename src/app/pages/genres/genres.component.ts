import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import {genres, MoviegenresDto} from '../../movies/genres'

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  catmovies: genres[] =[];
  constructor(private movieser : MovieService) { }

  ngOnInit(): void {
    this.movieser.getmoviesgenres().subscribe((gesdata) => {
      this.catmovies= gesdata;
    })
  }

}
