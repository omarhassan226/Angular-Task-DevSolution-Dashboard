import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { analytics } from '../models/master-data-models';
import { api_routes } from '../constants/api_routes';

@Injectable({
  providedIn: 'root',
})
export class MasterDataService {
  http = inject(HttpClient);

  getAnalytics() {
    return this.http.get<analytics[]>(
      environment.apiUrl + api_routes.analytics
    );
  }

  getProducts() {
    return this.http.get(environment.apiUrl + api_routes.products);
  }

  getOrders() {
    return this.http.get(environment.apiUrl + api_routes.orders);
  }
}
