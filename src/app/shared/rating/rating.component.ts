import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "mt-rating",
  templateUrl: "./rating.component.html"
})
export class RatingComponent implements OnInit {
  @Output() rated = new EventEmitter<number>()
  rates: number[] = [1, 2, 3, 4, 5];
  rating: number = 0;
  previusRating: number;

  constructor() {}

  ngOnInit() {}

  setRating(rate: number) {
    this.rating = rate;
    this.previusRating = undefined;
    this.rated.emit(this.rating)
  }

  setTempRating(rate: number) {
    if (this.previusRating === undefined) this.previusRating = this.rating;
    this.rating = rate;
  }

  clearTempRating(rate: number) {
    if (this.previusRating !== undefined) this.rating = this.previusRating;
    this.previusRating = undefined;
  }
}
