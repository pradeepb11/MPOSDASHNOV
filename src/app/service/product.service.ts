import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, throwError } from 'rxjs';

// enviroment
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = `${environment.baseUrl}`;


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

    /********************
     * Get All Products  CRUD
     */
    getAllProductList(): Observable<any>{
      return this.http.get<any>(`${baseUrl}/product`, httpOptions)
      .pipe(map(res=>res))
    }

    /*********************
     * Get Single Product CRUD
     */
    getSingleProduct(id:number): Observable<any>{
      return this.http.get<any>(`${baseUrl}/product/${id}`, httpOptions)
      .pipe(map(res=>res))
    }
    
    /********************
     * Create Product CRUD
     */
    createProduct(product: Product): Observable<any>{
      return this.http.post<Product>(`${baseUrl}/product`, product, httpOptions)
      .pipe(map(res=>res))
    }

    /*********************
     * Update Product CRUD
     */
    putProduct(product: Product): Observable<Product>{
      return this.http.put<Product>(`${baseUrl}/product`, product, httpOptions)
      .pipe(map(res=>res))
    }
    
    /*********************
     * Delete Product CRUD
     */
    deleteProduct(id: number): Observable<any>{
      return this.http.delete<any>(`${baseUrl}/product/${id}`, httpOptions)
     .pipe(map(res=>res))
    }

    




}



export interface Product{
  product_name: string;
  product_description:string;
  product_price: number;
  product_sku: string;
  product_category_id: string;
  product_type_id: number;
  product_type: string;
  price_type: string;
  created_by: number;
}




