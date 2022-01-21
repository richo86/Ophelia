import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleDetail {
  Id: number;
  SaleId: number;
  ProductId: number;
  SaleTotal: number;
  Quantity: number;
  Tax: number;
}
