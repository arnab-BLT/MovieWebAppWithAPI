import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movies/movies';
import { IMAGESIZE } from '../../constants/imagesize'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('myanifade',[
      state('void',style({opacity: 0})),
      transition('void <=> *', [animate('1s')]),
      // transition('* => void', [animate('500ms')]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[]=[];
  currentslideindex: number=0;
  imgeurls = IMAGESIZE;
  @Input() isBanner: boolean= false;
  constructor() { }

  ngOnInit(): void {
    if(!this.isBanner){
      setInterval(()=>{
        this.currentslideindex= ++this.currentslideindex % this.items.length;
      },5000)
    }

  }

}
