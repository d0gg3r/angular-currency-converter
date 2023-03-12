import { Component, OnInit } from '@angular/core';
import { RatesService } from '../rates.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentDateTime: Date = new Date();
  day = this.currentDateTime.getDate();
  month = this.currentDateTime.getMonth() + 1;
  year = this.currentDateTime.getFullYear();
  rates: any;
  loading = false;

  constructor(private ratesService: RatesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.ratesService.getData().subscribe((data: any) => {
      this.rates = data.response.rates;
      console.log(this.rates);
      this.loading = false;
    });
  }

  usdToUah() {
    return this.rates.UAH;
  }

  eurToUah() {
    return this.usdToUah() / this.rates.EUR;
  }
}
