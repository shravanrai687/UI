import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockListComponent } from './stock-list/stock-list.component';


const routes: Routes = [
  {path:'create-companies',component:CreateCompanyComponent},
 {path:'stocks', component:StockListComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'create-stocks',component:CreateStockComponent},
  {path:'companies', component:CompanyListComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
