import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './company';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyUrl2="http://localhost:8079/company/addCompany";
  private companyUrl: string;
  constructor(private http: HttpClient) {
    this.companyUrl = 'http://localhost:8079/company/getCompanyDetails';
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }
  
  createCompany(company:Company):Observable<any>{
    return this.http.post(`${this.companyUrl2}`,company);
  }

}
