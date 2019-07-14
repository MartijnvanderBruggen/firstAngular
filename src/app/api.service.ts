import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(){
    return this.httpClient.get(`http://siliconbackalley2.com/api/products`);
  }
}
