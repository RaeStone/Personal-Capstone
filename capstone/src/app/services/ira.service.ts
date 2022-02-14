import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IraService {

  constructor(private http:HttpClient) { }

  getIRAFull(id: number): Observable<any> {
    return this.http.get("https://iramicroservice.herokuapp.com/iras/secret/" + id);
  }
}