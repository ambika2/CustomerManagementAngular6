// JavaScript source code
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { CustomerComponent } from "./customer.component";
import { RouterModule } from "@angular/router";
import { OrderComponent } from "./order.component";
import { OrdersTableComponent } from "./ordersTable.component";
import { CustomerOrdersComponent } from "./customerOrders.component";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [CustomerComponent, OrderComponent, OrdersTableComponent, CustomerOrdersComponent],

  exports: [CustomerComponent, OrderComponent, OrdersTableComponent, CustomerOrdersComponent] 
})
export class StoreModule { }
