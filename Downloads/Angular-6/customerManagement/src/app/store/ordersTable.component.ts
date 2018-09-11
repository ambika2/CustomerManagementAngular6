import { Component } from "@angular/core";
import { Customer, Order } from "../model/customer.model";
import { CustomerRepository } from "../model/customer.repository";

@Component({
    selector: "ordersTable",
    templateUrl: "./ordersTable.html"
})

export class OrdersTableComponent {
// product: string = "";
  constructor(private repository: CustomerRepository) { }

    get customers(): Customer[] {
        return this.repository.getCustomers();
  }


}
