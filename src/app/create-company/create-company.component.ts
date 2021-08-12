import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
company:Company=new Company();
  constructor(private companyService:CompanyService,private router:Router) { }

  ngOnInit(): void {
  }
  saveCompany()
  {

this.companyService.createCompany(this.company).subscribe(data=>{console.log(data);});
this.gotoCompany();
  }
  gotoCompany()
  {
this.router.navigate(['/companies']);
  }
onSubmit()
{
  console.log(this.company);
  this.saveCompany();
}
}
