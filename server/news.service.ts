import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: string = "kk";
  constructor(public _httpclient: HttpClient) {

  }

  getnews(): Observable<object> {
    return this._httpclient.get(this.url);
  }

}
