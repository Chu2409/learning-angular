import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://fakestoreapi.com/products'

  constructor(private htppClient: HttpClient) { }

  public getProducts(): Observable<IProduct[]> {
    return this.htppClient.get<IProduct[]>(this.baseUrl)
  }

  public getProductById(id: number): Observable<IProduct> {
    return this.htppClient.get<IProduct>(`${this.baseUrl}/${id}`)
  }

  public getCategories(): Observable<ICategory[]> {
    return this.htppClient.get<ICategory[]>(`${this.baseUrl}/categories`)
  }

  public postProduct(product: IProduct): Observable<IProduct> {
    return this.htppClient.post<IProduct>(this.baseUrl, product)
  }

  public putProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.htppClient.put<IProduct>(`${this.baseUrl}/${id}`, product)
  }

  public deleteProduct(id: number): Observable<IProduct> {
    return this.htppClient.delete<IProduct>(`${this.baseUrl}/${id}`)
  }
}
