import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { account } from '../types/account';
import { transaction } from '../types/transaction';
//import { transaction } from '../types/transaction';
const accountUrl = "http://localhost:8080/accounts/"

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  acc: account[] | null = null;
  trans: transaction[] | null = null;
 
  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.bankService.fetchAllAccount().subscribe((accnt) => {
      this.acc = accnt;
      console.log(this.acc)
      this.acc.forEach( e => {
        this.trans = e.transactions
      })
      console.log(this.trans)
  });
}
  
}
