import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  @Input() value!: number;
  @Input() suffix!: string;
  @Input() gauge!: number;
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
