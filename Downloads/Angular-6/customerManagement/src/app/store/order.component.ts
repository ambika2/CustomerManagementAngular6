import { Component } from "@angular/core";
import { Customer,Order } from "../model/customer.model";
import { CustomerRepository } from "../model/customer.repository";
import { OrdersTableComponent } from "./ordersTable.component";
@Component({
    selector: "order",
    templateUrl: "./orders.html"
})

export class OrderComponent {
  constructor(private repository: CustomerRepository) { }

  get customers(): Customer[] {
    return this.repository.getCustomers();
  }

}
