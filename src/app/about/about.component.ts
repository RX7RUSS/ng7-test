import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  images: object
  randomImages: object

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getImages().subscribe(data => {
        this.images = data
        console.log(this.images);
      }
    );

    this.data.randomImages().subscribe(data => {
        this.randomImages = data
        console.log(this.randomImages);
      }
    );
  }

}
