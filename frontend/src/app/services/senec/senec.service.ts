import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SenecData } from 'src/app/types/senec.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SenecService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getSenecData(): Observable<SenecData> {
    return this.httpClient.get<SenecData>(`${environment.api}/senec`);
  }

}
