import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BankmgmtModule } from './bankmgmt/bankmgmt.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorService } from './error.service';
import { TransactionDetailsComponent } from './bankmgmt/transaction-details/transaction-details.component';
//import { CustomerDetailsComponent } from './bankmgmt/customer-details/customer-details.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,BankmgmtModule
  ],
  providers: [
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
