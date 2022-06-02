import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(caminho: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${caminho}`);
  }

  getById(caminho: string, id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${caminho}/${id}`);
  }

  update(caminho: string, item: any): Observable<any> {
    return this.http.put(`${environment.baseUrl}/${caminho}/${item.id}`, item);
  }

  add(caminho: string, item: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/${caminho}`, item);
  }
}
