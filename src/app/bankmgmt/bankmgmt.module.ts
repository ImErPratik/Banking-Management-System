import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { RouterModule } from '@angular/router';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorService } from '../error.service';
import { BankService } from './bank.service';
import { BankComponent } from './bank/bank.component';
import { AccountsComponent } from './accounts/accounts.component';



@NgModule({
  declarations: [
    CustomerDetailsComponent,
    TransactionDetailsComponent,
    AccountDetailsComponent,
    BankComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ErrorService,
    BankService
  ]
})
export class BankmgmtModule { }
