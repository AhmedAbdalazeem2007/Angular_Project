import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string
  constructor(private httpclient: HttpClient) {
    this.url = "";
  }
  gettodos(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(this.url);
  }

}
