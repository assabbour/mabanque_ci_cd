import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private apiUrl = 'http://localhost:3000/transactions'

  constructor(private http:HttpClient) { }

  getTransactins():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
