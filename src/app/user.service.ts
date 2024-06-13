import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  API_URL: string = 'http://localhost:3000';

  Signup(data: IUser): Observable<any> {
    return this.http.post(this.API_URL + '/signup', data)
  }

  Signin(data: IUser): Observable<any> {
    return this.http.post(this.API_URL + '/signin', data)
  }

}
