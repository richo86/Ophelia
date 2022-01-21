import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Client {
  Id: number;
  Name: string;
  Document: number;
  PhoneNumber: number;
  Age: number;
  Address: string;
}
