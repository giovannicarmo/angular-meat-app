import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "mt-order-costs",
  templateUrl: "./order-costs.component.html"
})
export class OrderCostsComponent implements OnInit {
  @Input() shipping: number;
  @Input() itemsValue: number;

  constructor() {}

  ngOnInit() {}

  total(): number {
    return this.shipping + this.itemsValue;
  }
}
