import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {

  }

  public _url = "http://192.168.0.101/bike/";
  // public _url = "http://localhost/bike/";
  // public _url = "httpss://joydey18000.000webhostapp.com/";


}
