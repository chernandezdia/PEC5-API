import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../models/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>('https://jsonplaceholder.typicode.com/users');
  }

  getDataById(id: String): Observable<Data> {
    return this.http.get<Data>('https://jsonplaceholder.typicode.com/users?id=' + id);
  }

}
