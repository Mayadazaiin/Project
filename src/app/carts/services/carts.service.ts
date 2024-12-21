import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private http: HttpClient) {}

  getAllCarts(param?: any) {
    let params = new HttpParams();
    params = params
      .append('startDate', param?.start)
      .append('endDate', param?.end);
    return this.http.get(environment.baseApi + 'carts', { params });
  }
  deleteCart(id: number) {
    return this.http.delete(environment.baseApi + 'carts/' + id);
  }
 
}
