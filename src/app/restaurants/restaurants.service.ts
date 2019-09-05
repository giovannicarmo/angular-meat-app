import { Restaurant } from "./restaurant/restaurant.model";
import { Http } from '@angular/http'
import { Injectable} from "@angular/core";
import { MEAT_API } from "app/app.api";
import { ErrorHandler } from "../app.error-handler"
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class RestaurantService {

    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
}