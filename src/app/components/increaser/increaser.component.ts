import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styleUrls: ['./increaser.component.css']
})
export class IncreaserComponent implements OnInit {

  @Input() progress: number = 50;
  @Input('name') description: string = 'description';

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Description: ', this.description);
    console.log('Progress: ', this.progress);
  }

  ngOnInit() {
    console.log('Description: ', this.description);
  }

  updateProgress( value: number ) {
    if ( (value > 0) && (this.progress < 100) ) {
      this.progress = this.progress + value;
      this.changeValue.emit(this.progress);
    } else if ( (value < 0) && (this.progress > 0) ) {
      this.progress = this.progress + value;
      this.changeValue.emit(this.progress);
    }
  }

}
