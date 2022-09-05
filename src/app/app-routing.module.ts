import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './bankmgmt/customer-details/customer-details.component';
import { TransactionDetailsComponent } from './bankmgmt/transaction-details/transaction-details.component';
import { AccountDetailsComponent } from './bankmgmt/account-details/account-details.component';
import { AccountsComponent } from './bankmgmt/accounts/accounts.component';

const routes: Routes = [{path: 'customers', component:CustomerDetailsComponent,children:
[{path:'account/:accountId',component:AccountDetailsComponent}]},
{path:'transactions',component:TransactionDetailsComponent},
{path: 'accounts', component:AccountsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
