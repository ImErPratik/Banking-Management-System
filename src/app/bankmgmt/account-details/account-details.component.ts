import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';
import { account } from '../types/account';
import { transaction } from '../types/transaction';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  acc: account | null = null;
  error: boolean = false;

  trans: transaction[] | null = null;
  transVisible : boolean = false;


  constructor(private rout: ActivatedRoute, private bankService: BankService) { }
  ngOnInit(): void {
    this.rout.params.subscribe(params => {
      const { accountId } = params;
      
      this.bankService.fetchAccount(accountId).subscribe(accnt => {
        this.acc = accnt;
        console.log(this.acc)
        this.error = this.bankService.err;
        this.trans = this.acc.transactions;
      })

    })
  }

  transactionSearch(): void {
    console.log(this.trans)
    if(this.trans){
      this.transVisible = true;
    }else{
      this.trans = [];
    }

  }


}
