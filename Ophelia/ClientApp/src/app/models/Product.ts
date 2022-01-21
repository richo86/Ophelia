import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {
  Id: number;
  Name: string;
  ProductionCost: number;
  SaleCost: number;
  Quantity: number;
}
