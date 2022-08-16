import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-value',
  templateUrl: './icon-value.component.html',
  styleUrls: ['./icon-value.component.scss']
})
export class IconValueComponent implements OnInit {

  @Input() value!: number;
  @Input() suffix!: string;
  @Input() positiveIcons!: string[];
  @Input() negativeIcons!: string[];
  @Input() positiveColor!: string;
  @Input() negativeColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
