import { Injectable } from "@angular/core";
import { Customer,Order } from "./customer.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
//import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
  private customers: Customer[] = [
    new Customer(1, "Ambika", "Goyal", "AP Colony", "Gaya", [
      { product: 'Basket', price: 29.99, quantity: 1, orderTotal: 29.99 },
      { product: 'Yarn', price: 9.99, quantity: 1, orderTotal: 39.96 },
      { product: 'Needes', price: 5.99, quantity: 1, orderTotal: 5.99 }
    ]),

    new Customer(2, "Afsha", "Anjum", "RR Nagar", "Bangalore", [
      { product: 'Table', price: 329.99, quantity: 1, orderTotal: 329.99 },
      { product: 'Chair', price: 129.99, quantity: 4, orderTotal: 519.96 },
      { product: 'Lamp', price: 89.99, quantity: 5, orderTotal: 449.95 },
    ]),

    new Customer(3, "Pooja", "Thimiah", "Indiranagar", "Bangalore", [
      { product: 'Call of Duty', price: 59.99, quantity: 1, orderTotal: 59.99 },
      { product: 'Controller', price: 49.99, quantity: 1, orderTotal: 49.99 },
      { product: 'Gears of War', price: 49.99, quantity: 1, orderTotal: 49.99 },
      { product: 'Lego City', price: 49.99, quantity: 1, orderTotal: 49.99 }
    ]),
    new Customer(4, "Shivam", "Maurya", "Patna-Zoo", "Patna", [
      { product: 'Baseball', price: 9.99, quantity: 5, orderTotal: 49.95 },
      { product: 'Bat', price: 19.99, quantity: 1, orderTotal: 19.99 }
    ])
  ];

    getCustomers(): Observable<Customer[]> {
        return Observable.from([this.customers]);
  }

  insert(fname: string, lname: string, city: string) {
    var topId = this.customers.length+1;
    this.customers.push(new Customer(topId, fname, lname, "", city,[]));
  }

  delete(id: number) {
    for (var i = this.customers.length - 1; i >= 0; i--) {
      if (this.customers[i].id === id) {
        this.customers.splice(i, 1);
        break;
      }
    }
  }
    //saveOrder(order: Order): Observable<Order> {
    //    console.log(JSON.stringify(order));
    //    return Observable.from([order]);
    //}
}
