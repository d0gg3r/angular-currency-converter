import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RatesService } from '../rates.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  rates: any;
  currencyFrom = 'USD';
  currencyTo = 'UAH';
  amountFrom!: number;
  amountTo!: number;
  currencies: string[] = [
    'USD',
    'EUR',
    'GBP',
    'UAH',
    'CZK',
    'PLN',
    'BTC',
    'ETH',
  ];

  constructor(private ratesService: RatesService) {}

  ngOnInit(): void {
    this.ratesService.getData().subscribe((data: any) => {
      // console.log(data);
      this.rates = data.response.rates;
      console.log(this.rates);
    });
  }

  convertAmountFrom() {
    this.amountTo =
      (this.amountFrom * this.rates[this.currencyTo]) /
      this.rates[this.currencyFrom];
  }

  handleCurrencyFrom(currencyFrom: any) {
    this.amountTo =
      (this.amountFrom * this.rates[this.currencyTo]) /
      this.rates[currencyFrom];
    this.convertAmountFrom();
  }

  convertAmountTo() {
    this.amountFrom =
      (this.amountTo * this.rates[this.currencyFrom]) /
      this.rates[this.currencyTo];
  }

  handleCurrencyTo(currencyTo: any) {
    this.amountFrom =
      (this.amountTo * this.rates[this.currencyFrom]) / this.rates[currencyTo];
    this.convertAmountTo();
  }

  handleInput1(e: any) {
    this.amountFrom = e.target.value;
    console.log(this.amountFrom);
    this.convertAmountFrom();
  }

  handleInput2(e: any) {
    this.amountTo = e.target.value;
    this.convertAmountTo();
  }
}
