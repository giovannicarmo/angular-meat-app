import { Component, OnInit } from "@angular/core";
import { RadioOption } from "app/shared/radio/radio-option.model";
import { OderService } from "./order.service";
import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html"
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Crédito", value: "CCR" },
    { label: "Cartão de Débito", value: "DCR" },
    { label: "Ticket Refeição", value: "REF" }
  ];
  shipping: number = 8;

  constructor(private orderService: OderService) {}

  ngOnInit() {}

  valueItems(): number {
    return this.orderService.valueItems();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increase(item: CartItem) {
    this.orderService.increaseItem(item);
  }

  decrease(item: CartItem) {
    this.orderService.decreaseItem(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }
}
