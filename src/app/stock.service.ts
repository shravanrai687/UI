import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

 
  
  private stockURL2="http://localhost:8079/price/addstock";
  private stockURL1="http://localhost:8079/price/stockPrice";
  constructor(private httpClient:HttpClient) { }

  getStockList():Observable<any>{
    return this.httpClient.get(`${this.stockURL1}`);
  }

  createStock(stock:Stock):Observable<any>{
    return this.httpClient.post(`${this.stockURL2}`,stock);
  }
}
