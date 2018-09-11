import { Injectable } from "@angular/core";
import { Customer,Order } from "./customer.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class CustomerRepository {
  private customers: Customer[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  getCustomers(): Customer[] {
    return this.customers;
  }

  getCustomer(id: number): Customer {
    return this.customers.find(p => p.id == id);
  }

  getOrders(id:number): Order[] {
    for (var i = 0; i < this.customers.length; i++) {
      if (id == this.customers[i].id)
        return this.customers[i].orders;
    }
  }

  insertCustomer(fname:string,lname:string,city:string) {
    this.dataSource.insert(fname, lname, city);
  }

  deleteCustomer(id: number) {
    this.dataSource.delete(id);
  }
}
