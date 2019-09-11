import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-details/shopping-cart/shopping-cart-service";
import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OderService {
  constructor(private cartService: ShoppingCartService, private http: Http) {}

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

  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post(
        `${MEAT_API}/orders`,
        JSON.stringify(order),
        new RequestOptions({ headers: headers })
      )
      .map(response => response.json())
      .map(order => order.id);
  }
}
