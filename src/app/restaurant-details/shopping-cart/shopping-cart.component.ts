import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "./shopping-cart-service";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html"
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shopingCartService: ShoppingCartService) {}

  ngOnInit() {}

  items(): any[] {
    return this.shopingCartService.items;
  }

  clearCart() {
    this.shopingCartService.clear();
  }

  removeItem(item: any) {
    this.shopingCartService.remove(item);
  }

  addItem(item: any) {
    this.shopingCartService.add(item);
  }
  total(): number {
    return this.shopingCartService.total();
  }
}
