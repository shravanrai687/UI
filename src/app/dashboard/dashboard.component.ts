import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /* events : any = [
     {
       "id" : "001",
       "name" : "SBI",
       "sector" : "Bank"
     },
     {
       "id" : "002",
      "name" : "Tata Motors",
       "sector" : "Automobile"
     },
     {
       "id" : "003",
       "name" : "Adani Power",
       "sector" : "Power"
     },
     {
    "id" : "004",
       "name" : "Reliance",
       "sector" : "Telecom"
     },
     {
       "id" : "005",
       "name" : "Infosys",
      "sector" : "IT"
     },
    {
    "id" : "006",
       "name" : "ITC",
       "sector" : "FMCG"
     },
     {
       "id" : "007",
       "name" : "Wipro",
       "sector" : "IT"
     },
     {
       "id" : "008",
       "name" : "HDFC",
       "sector" : "Bank"
     },
     {
       "id" : "009",
       "name" : "AXIS Bank",
       "sector" : "Bank"
     },
     {
       "id" : "010",
       "name" : "Godrej",
       "sector" : "FMCG"
     },
     {
       "id" : "011",
     "name" : "Asian Paints",
       "sector" : "Paints"
     },
     {
       "id" : "012",
       "name" : "MRF",
       "sector" : "Tyres",
     }

   ];*/

  events: Company[];
  company: string;
  id: number;
  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.findAll().subscribe(data => {
      this.events = data;
      console.log(this.events);
    });
  }
  
  
  filter() {
      $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
  }

  showDiv = {
    isCompany : true,
    isPrice : false,
    //next : false
  }
  
  public carryInfo(item) {
    this.company = item.name;
    this.id = item.id;
  }
}
