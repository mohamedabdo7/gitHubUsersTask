import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  burl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }
  
  getAllUsers():Observable<any>{
    return this.http.get(`${this.burl}`);
    
  }

  getUserDetails(username):Observable<any>{
    return this.http.get(`${this.burl}/${username}`);
  }
  getUserRepos(username):Observable<any>{
    return this.http.get(`${this.burl}/${username}/repos`);
  }

}
