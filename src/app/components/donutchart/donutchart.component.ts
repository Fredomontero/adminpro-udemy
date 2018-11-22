import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})
export class DonutchartComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  @Input() chart_description: string;
  @Input() chart_data: number[];
  @Input() chart_labels: string[];
  @Input() chart_type: string;

  constructor() { }

  ngOnInit() {
  }

}
