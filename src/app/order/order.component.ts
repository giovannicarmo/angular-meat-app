import { Component, OnInit } from "@angular/core";
import { RadioOption } from "app/shared/radio/radio-option.model";
import { OderService } from "./order.service";
import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";
import { Order, OrderItem } from "./order.model";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

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
  orderForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  constructor(
    private orderService: OderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group(
      {
        name: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(5)
        ]),
        email: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this.emailPattern)
        ]),
        emailConfirmation: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this.emailPattern)
        ]),
        address: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(5)
        ]),
        number: this.formBuilder.control("", [
          Validators.required,
          Validators.pattern(this.numberPattern)
        ]),
        optionalAddress: this.formBuilder.control(""),
        paymentOption: this.formBuilder.control("", [Validators.required])
      },
      { validator: OrderComponent.equalsTo }
    );
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get("email");
    const emailConfirmation = group.get("emailConfirmation");
    if (email && emailConfirmation) {
      if (email.value !== emailConfirmation.value) {
        return { emailsNotMatch: true };
      }
    }
  }

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

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map(
      (item: CartItem) => new OrderItem(item.quant, item.menuItem.id)
    );
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(["/order-summary"]);
      this.orderService.clear();
    });
  }
}
