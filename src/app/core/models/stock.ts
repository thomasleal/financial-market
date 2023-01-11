export interface Stock {
  chart: Chart;
}

export interface Chart {
  result: Result[];
  error: string;
}

export interface Result {
  meta: Meta;
  timestamp: number[];
  indicators: Indicators;
}

export interface Meta {
  currency: string;
  symbol: string;
  exchangeName: string;
  instrumentType: string;
  firstTradeDate: number;
  regularMarketTime: number;
  gmtoffset: number;
  timezone: string;
  exchangeTimezoneName: string;
  regularMarketPrice: number;
  chartPreviousClose: number;
  priceHint: number;
  dataGranularity: string;
  range: string;
  validRanges: string[];
  currentTradingPeriod: CurrentTradingPeriod;
}

export interface CurrentTradingPeriod {
  pre: Pre;
  regular: Regular;
  post: Post;
}

export interface Pre {
  timezone: string;
  end: number;
  start: number;
  gmtoffset: number;
}

export interface Regular {
  timezone: string;
  end: number;
  start: number;
  gmtoffset: number;
}

export interface Post {
  timezone: string;
  end: number;
  start: number;
  gmtoffset: number;
}

export interface Indicators {
  quote: Quote[];
  adjclose: Adjclose[];
}

export interface Quote {
  low: number[];
  high: number[];
  open: number[];
  close: number[];
  volume: number[];
}

export interface Adjclose {
  adjclose: number[];
}
