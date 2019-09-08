import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantService } from "app/restaurants/restaurants.service";
import { Observable } from "rxjs/Observable";
import { Review } from "./review/review.model";

@Component({
  selector: "mt-reviews",
  templateUrl: "./reviews.component.html"
})
export class ReviewsComponent implements OnInit {
  reviews$: Observable<Review[]>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getReviewsOfRestaurants();
  }

  private getReviewsOfRestaurants() {
    this.reviews$ = this.restaurantService.reviewsOfRestaurant(
      this.route.parent.snapshot.params["id"]
    );
  }
}
