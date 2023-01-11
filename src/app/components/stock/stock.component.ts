import { Component, OnInit, ViewChild } from '@angular/core';
import { FinancialMarketService } from 'src/app/core/services/financial-market.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  public data: Array<any> = [];
  public data2: Array<any> = [];
  private time: number[] = [];
  private open: number[] = [];
  private high: number[] = [];
  private low: number[] = [];
  private close: number[] = [];
  private volume: number[] = [];

  constructor(private financialMarketService: FinancialMarketService) {}

  ngOnInit(): void {
    this.getAsset();
  }

  private getAsset() {
    this.financialMarketService
      .getAssets(environment.apis.apiUrl)
      .subscribe((data: any) => {
        this.time = data.timestamp;
        this.close = data.indicators.quote[0].open;
        this.high = data.indicators.quote[0].high;
        this.low = data.indicators.quote[0].low;
        this.open = data.indicators.quote[0].close;
        this.volume = data.indicators.quote[0].volume;

        this.time.forEach((time: any, index: any) => {
          this.data2.push({
            time: new Date(time * 1000),
            open: this.open[index],
            close: this.close[index],
            high: this.high[index],
            low: this.low[index],
            volume: this.volume[index]
          });
        });
        this.data = [this.data2];
        this.data[0].pop();
        this.data[0].title = 'Petrobras (PETR4)';
      });
  }
}
