import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '46bac45572mshf0b2f01ae6f2d12p140116jsn3ef3ad3792a7',
      'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com',
    },
  };

  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get<any>(
      'https://currencyscoop.p.rapidapi.com/latest',
      this.options
    );
  }
}
