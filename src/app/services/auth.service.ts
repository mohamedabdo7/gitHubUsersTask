import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url = 'http://localhost:3000/api';
  // api_url = 'http://localhost:3000/api';
  // private _registerUrl = 'api/register';
	// private _loginUrl = 'api/login';
  constructor(private http: HttpClient) { }

  login(user):Observable<any>{
    console.log(user)
    return this.http.post(`${this.api_url}/login`,user);
  }
  register(user):Observable<any>{
    console.log(user)
    return this.http.post(`${this.api_url}/register`,user);
  }
}
