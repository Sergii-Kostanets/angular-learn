import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromString: 'limit=5'
      })
    })
  }
}
