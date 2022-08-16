import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit {

  @Input() value!: number;

  constructor() { }

  ngOnInit(): void {
  }

  getIcon() {
    if(this.value >= 98)
      return 'battery_full'
    else if(this.value >= 85)
      return 'battery_6_bars'
    else if(this.value >= 71)
      return 'battery_5_bars'
    else if(this.value >= 57)
      return 'battery_4_bars'
    else if(this.value >= 42)
      return 'battery_3_bars'
    else if(this.value >= 28)
      return 'battery_2_bars'
    else if(this.value >= 14)
      return 'battery_1_bars'
    else
      return 'battery_0_bars'
  }

  getColor() {
    if(this.value >= 65)
      return 'forestgreen'
    else if(this.value >= 35)
      return 'orange'
    else
      return 'crimson'
  }

}
