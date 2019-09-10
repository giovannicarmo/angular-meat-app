import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-details/shopping-cart/shopping-cart-service";
import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";

@Injectable()
export class OderService {
  constructor(private cartService: ShoppingCartService) {}

  valueItems(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseItem(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseItem(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.remove(item);
  }
}
