import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styleUrls: ['./increaser.component.css']
})
export class IncreaserComponent implements OnInit {

  @ViewChild('txt_progress') txt_progress: ElementRef;

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

  onChanges(newValue: number) {

    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txt_progress.nativeElement.value = this.progress;
    this.changeValue.emit(this.progress);
  }

  updateProgress( value: number ) {
    if ( (value > 0) && (this.progress < 100) ) {
      this.progress = this.progress + value;
    } else if ( (value < 0) && (this.progress > 0) ) {
      this.progress = this.progress + value;
    }
    this.changeValue.emit(this.progress);
    this.txt_progress.nativeElement.focus();
  }

}
