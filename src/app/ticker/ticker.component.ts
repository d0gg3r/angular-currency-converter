import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss'],
})
export class TickerComponent implements OnInit {
  tickerText: string = 'DESIGNED AND DEVELOPED BY DOGGER //////';
  constructor() {}

  ngOnInit(): void {}

  displayTicker(times: number): string {
    return this.tickerText.repeat(times);
  }
}
