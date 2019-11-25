import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DemoService {

  constructor(private http : HttpClient) { }

  findAllPaginas():Observable<any>{
    return this.http.get("https://demo7744832.mockable.io/pages")
  }

  findAllRedesSociais():Observable<any>{
    return this.http.get("http://localhost:3000/redesSociais")
  }

  update(value):Observable<any>{
    let body = JSON.stringify(value)
    return this.http.put(`http://localhost:3000/redesSociais/${value.id}`, body, this.httpOptions())

  }

  httpOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

}
