import { ErrorService } from './error.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { catchError, delay, Observable, throwError } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products1', {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      delay(2000),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
