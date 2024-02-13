import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Product } from '../interFaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
   baseUrl ='https://api.escuelajs.co/api/v1/'
  constructor(private httpClient: HttpClient) { 
  }
  //version observable
  getAllProducts():Observable<Product[]>{
  const response = this.httpClient.get<Product[]>(`${this.baseUrl}products`)
  return response;
}

  //version promesa

//   getPromise():Promise<any[]>{
// return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}products`))}

  }

