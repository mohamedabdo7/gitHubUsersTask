import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id;
  searchText;
  userData;
  userRepos;
  favouriteUsers:any=[];
  constructor(private userSer:UsersService, private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  // this.favouriteUsers = localStorage.getItem('favUsers');
    this.activateRoute.params.subscribe(params => {
      // console.log(params)
      this.getUserDetails(params.username);
      this.getUserRepos(params.username);
    })
    // this.userSer.getUserDetails(this.id);
  }
getUserDetails(username) {
  this.userSer.getUserDetails(username).subscribe(res => {
    this.userData = res;
    console.log('data',this.userData)
  })
}
getUserRepos(username) {
  this.userSer.getUserRepos(username).subscribe(res => {
    this.userRepos = res;
    console.log('Repos',this.userRepos)
  })
}
addtoFavourite(user){
  this.favouriteUsers.push(user);
  localStorage.setItem('favUsers', this.favouriteUsers)
}

}
