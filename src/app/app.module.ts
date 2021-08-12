import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { StockListComponent } from './stock-list/stock-list.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CreateCompanyComponent } from './create-company/create-company.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StockListComponent,
    CreateStockComponent,
    CompanyListComponent,
    CreateCompanyComponent,
  ],
   imports: [
     BrowserModule,
     AppRoutingModule,
     HttpClientModule,
     FormsModule
    ],
  providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }

/*const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CompanyListComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/
