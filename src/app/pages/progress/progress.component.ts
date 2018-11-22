import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progress1: number = 50;
  progress2: number = 50;

  constructor() { }

  ngOnInit() {
  }

  updateProgress( event: number ) {
    this.progress1 = event;
  }

}
