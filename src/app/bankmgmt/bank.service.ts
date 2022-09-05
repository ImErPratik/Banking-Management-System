import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { customer } from './types/customer';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from '../error.service';
import { account } from './types/account';



const customerUrl = "http://localhost:8080/customers/";
const accountUrl = "http://localhost:8080/accounts/"

@Injectable({
  providedIn: 'root'
})
export class BankService {

  err: boolean = false;

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  private handleError(err: HttpErrorResponse, caught: any){

    // alert('something goes wrong')
    this.err = this.errorService.errorFound();

    return throwError(() => new Error(err.message));

  }

  fetchAllCustomers(): Observable<customer[]>{
    return this.http.get<customer[]>(customerUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  fetchAccount(accountId: string): Observable<account>{
    console.log(accountId)
    return this.http.get<account>(`${accountUrl}${accountId}`)
    .pipe(
      catchError(this.handleError)
    );
  }
  fetchAllAccount(): Observable<account[]>{
    return this.http.get<account[]>(accountUrl)
      .pipe(
        catchError(this.handleError)
      );
  }


}
