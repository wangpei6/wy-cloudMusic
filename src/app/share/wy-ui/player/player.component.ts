import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit {

  bufferOffset = 70;
  sliderValue = 35;
  constructor() { }

  ngOnInit() {

  }
}
