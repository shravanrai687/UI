import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies:any;
  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }
  private getCompanies(){
    this.companyService.findAll().subscribe(data=>{this.companies=data;});
  }
}
