import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {
stock:Stock=new Stock();
  constructor(private stockService:StockService,private router:Router) { }

  ngOnInit(): void {
  }
  saveStocks()
  {
    this.stockService.createStock(this.stock).subscribe(data=>{console.log(data);});
    this.goToStocks();
    //this.stockService.createStock(this.stock).subscribe(data=>{console.log(data);
    //this.goToStocks();},
    //error=>console.log(error));
  }
  goToStocks()
  {
    this.router.navigate(['/stocks']);
  }
onSubmit()
{
  console.log(this.stock);
  this.saveStocks();

}
}
