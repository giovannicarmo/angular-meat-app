import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "app/restaurants/restaurants.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MenuItem } from "../menu-item/menu-item.model";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu$: Observable<MenuItem[]>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getItensOfMenu();
  }

  private getItensOfMenu() {
    this.menu$ = this.restaurantService.menuOfRestautant(
      this.route.parent.snapshot.params["id"]
    );
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
