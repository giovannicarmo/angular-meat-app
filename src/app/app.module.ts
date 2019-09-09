import { BrowserModule } from "@angular/platform-browser";
import { NgModule,  LOCALE_ID} from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantComponent } from "./restaurants/restaurant/restaurant.component";
import { RestaurantService } from "./restaurants/restaurants.service";
import { RestaurantDetailsComponent } from "./restaurant-details/restaurant-details.component";
import { MenuComponent } from "./restaurant-details/menu/menu.component";
import { ShoppingCartComponent } from "./restaurant-details/shopping-cart/shopping-cart.component";
import { MenuItemComponent } from "./restaurant-details/menu-item/menu-item.component";
import { ReviewsComponent } from "./restaurant-details/reviews/reviews.component";
import { ReviewComponent } from "./restaurant-details/reviews/review/review.component";
import { ShoppingCartService } from "./restaurant-details/shopping-cart/shopping-cart-service";
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItensComponent } from './order/src/app/order/order-itens/order-itens.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    ReviewComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItensComponent
  ],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(ROUTES), FormsModule],
  providers: [RestaurantService, ShoppingCartService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
