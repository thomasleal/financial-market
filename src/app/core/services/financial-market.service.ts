import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class FinancialMarketService {
  private model = 'v8/finance/chart/PETR4.SA?&range=31d&interval=1d';

  constructor(private http: HttpClient) {}

  public getAssets(apiUrl: string): Observable<Stock> {
    return this.http.get<any>(`${this.model}`).pipe(
      map((val) => {
        return val.chart.result[0];
      })
    );
  }
}
