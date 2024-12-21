import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(environment.baseApi + 'products');
  }

  getAllCategories(): Observable<any> {
    return this.http.get(environment.baseApi + 'products/categories');
  }

  getProductsByCategory(keyword: string): Observable<any[]> {
    return this.http.get<any[]>(
      environment.baseApi + 'products/category/' + keyword
    );
  }

  getProductById(id: any): Observable<any> {
    return this.http.get<any>(environment.baseApi + 'products/' + id);
  }

  createProduct(model: any) {
  
    return this.http.post(environment.baseApi + 'product', model);
  }
}
