import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  add(item: MenuItem) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id == item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  increaseQty(item: CartItem) {
    item.quant++;
  }

  decreaseQty(item: CartItem) {
    item.quant--;
    if (item.quant === 0) this.remove(item);
  }

  remove(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
