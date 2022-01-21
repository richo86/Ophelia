import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Client } from '../models/Client';
import { Product } from '../models/Product';
import { Sale } from '../models/Sale';
import { SaleDetail } from '../models/SaleDetail';

@Injectable()
export class generalServices {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    if (error.status == 404) {
      return throwError('404')
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getProducts() {
    return this.http.get<any>('start/products').pipe(retry(3),
      catchError(this.handleError));
  }

  getProduct(id) {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache');
    let options = {
      headers: httpHeaders
    };
    return this.http.get<any>('start/' + id, options).pipe(retry(3),
      catchError(this.handleError));
  }

  create(product) {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache');
    let options = {
      headers: httpHeaders
    };
    let item = {
      "Id": Number(product.Id),
      "Name": product.Name,
      "ProductionCost": product.ProductionCost,
      "SaleCost": product.SaleCost,
      "Quantity": product.Quantity
    }
    return this.http.post<Product>('start/', item, options)
      .pipe(catchError(this.handleError));
  }

  update(product) {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache');
    let options = {
      headers: httpHeaders
    };
    return this.http.put('start/' + product.Id, product, options).pipe(retry(3),
      catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete('start/' + id).pipe(retry(3),
      catchError(this.handleError));
  }
}
