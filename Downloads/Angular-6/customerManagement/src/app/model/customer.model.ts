export class Customer {
  constructor(public id: number,
    public firstName: string,
    public lastName:string,
    public address: string,
    public city: string,
  public orders:Order[]) { }

}

export class Order {
  constructor(public product: string,
    public price: number,
    public quantity: number,
    public orderTotal: number) {}
}
