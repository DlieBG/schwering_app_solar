import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss']
})
export class MoodComponent implements OnInit {

  @Input() goodConditions!: boolean[];

  constructor() { }

  ngOnInit(): void {
  }

  isHappy() {
    return this.goodConditions.every(x => x);
  }

  isNeutral() {
    return !this.isHappy() && !this.isSad();
  }

  isSad() {
    return this.goodConditions.every(x => !x);
  }

}
