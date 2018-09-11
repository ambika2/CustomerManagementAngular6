import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from './store/store.module';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { CustomerComponent } from "./store/customer.component";
import { OrderComponent } from './store/order.component';
import { OrdersTableComponent } from "./store/ordersTable.component";
import { CustomerOrdersComponent } from "./store/customerOrders.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      {
        path: "customer", component: CustomerComponent,
      },
      {
        path: "order", component:OrderComponent,
      },
      {
        path: "ordersTable", component: OrdersTableComponent
      },
      {
        path: "customerOrders/:id", component: CustomerOrdersComponent
      },
      { path: "**", redirectTo: "/customer" }
    ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
