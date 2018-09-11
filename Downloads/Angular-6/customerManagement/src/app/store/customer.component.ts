import { Component } from "@angular/core";
import { Customer } from "../model/customer.model";
import { CustomerRepository } from "../model/customer.repository";
import { CustomerOrdersComponent } from "./customerOrders.component";
@Component({
  selector: "customer",
  templateUrl: "./customers.html"
})

export class CustomerComponent {
  constructor(private repository: CustomerRepository) { }

  get customers():Customer[] {
    return this.repository.getCustomers();
  }

  insertCustomer(fname: string, lname: string, city: string) {
    this.repository.insertCustomer(fname, lname, city);
  }
  deleteCustomer(id: number) {
    this.repository.deleteCustomer(id);
  }
}
