import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movies/movies';
import { IMAGESIZE } from '../../constants/imagesize'

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() upmovie: Movie | null = null;
  imgeurls = IMAGESIZE;
  constructor() { }

  ngOnInit(): void {
  }

}
