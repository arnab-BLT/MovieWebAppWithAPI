import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'videoembade',
  templateUrl: './videoembade.component.html',
  styleUrls: ['./videoembade.component.scss']
})
export class VideoembadeComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key:string | null =null;
  videourl: SafeResourceUrl = '';
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    switch(this.site){
      case 'YouTube':
      this.videourl = this.getsanUrl('https://www.youtube.com/embed/'+ this.key);
      break;
      case 'Vimeo' :
        this.videourl = this.getsanUrl('https://vimeo.com/embaded/'+ this.key);
    }
  }
  getsanUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
