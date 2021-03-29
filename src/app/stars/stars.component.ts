import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nga-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() count = 5;
  @Input() rating = 0;
  stars: Array<boolean> = [];

  ngOnInit() {
    for (let i = 1; i <= this.rating; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
