import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { SenecService } from 'src/app/services/senec/senec.service';
import { SenecData } from 'src/app/types/senec.type';
import de from '@angular/common/locales/de';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  senecData!: SenecData;

  constructor(
    public senecService: SenecService
  ) { }

  ngOnInit(): void {
    registerLocaleData(de);
    
    timer(0, 5000).subscribe(() => {
      this.getSenecData();
    });
  }

  getSenecData() {
    this.senecService.getSenecData().subscribe(
      (senecData) => {
        this.senecData = senecData;
      }
    );
  }

}
