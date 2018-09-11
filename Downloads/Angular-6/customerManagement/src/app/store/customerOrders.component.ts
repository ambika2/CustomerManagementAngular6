import { Component } from "@angular/core";
import { Customer } from "../model/customer.model";
import { CustomerRepository } from "../model/customer.repository";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "customerOrders",
    templateUrl: "./customerOrders.html"
})

export class CustomerOrdersComponent {

  _customer: Customer;
  id: number;

  constructor(private repository: CustomerRepository, private router: Router,
    activeRoute: ActivatedRoute) {
    // Fetch that once customer using id and assign to _customer
 
      this.id=activeRoute.snapshot.params["id"];
    this._customer = this.repository.getCustomer(this.id);
    }

  get customer(): Customer{
    return this._customer;
    }

}
