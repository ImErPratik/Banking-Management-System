import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';
import { customer } from '../types/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  

  customerArray: customer[] = [];
  hideTable: boolean = false;

  constructor(private bankService: BankService) { }
  ngOnInit(): void {

    this.bankService.fetchAllCustomers().subscribe((cust) => {
      this.customerArray = cust;
      this.hideTable = true;
    })

  }

  getAccountDetails():void {
    this.hideTable=false;
  }

  }

  
 




