import { Component, OnInit } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { RestaurantService } from "./restaurants.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html"
})
export class RestaurantsComponent implements OnInit {
  restaurants$: Observable<Restaurant[]>;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.getRestaurants();
  }

  private getRestaurants() {
    this.restaurants$ = this.restaurantService.restaurants();
  }
}
