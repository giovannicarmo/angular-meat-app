class Order {
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOpiton: string,
    public orderItems: OrderItem[] = []
  ) {}
}

class OrderItem {
  constructor(public quant: number, public itemId: string) {}
}


export{Order, OrderItem}
