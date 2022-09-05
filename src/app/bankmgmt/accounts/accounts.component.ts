import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';
import { account } from '../types/account';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  acc: account[] | null = null;
  error: boolean = false;




  constructor(private rout: ActivatedRoute, private bankService: BankService) { }
  ngOnInit(): void {
    this.rout.params.subscribe(params => {
      
      this.bankService.fetchAllAccount().subscribe(accnt => {
        this.acc = accnt;
      })

    })
  }



}
