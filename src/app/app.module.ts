import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  IgxFinancialChartModule,
  IgxLegendModule
} from 'igniteui-angular-charts';
import { StockComponent } from './components/stock/stock.component';

@NgModule({
  declarations: [AppComponent, StockComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IgxFinancialChartModule,
    IgxLegendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
