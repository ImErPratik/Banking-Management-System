import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  err : boolean = false

  constructor() { }

  errorFound(): boolean{
 
    this.err = true;

    return this.err;
  }



}
