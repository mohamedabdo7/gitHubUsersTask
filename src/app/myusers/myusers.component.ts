import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myusers',
  templateUrl: './myusers.component.html',
  styleUrls: ['./myusers.component.css']
})
export class MyusersComponent implements OnInit {
  data;
  searchText;
  userData;
  constructor(private usersSer: UsersService, private router: Router) { }

  ngOnInit() {
    this.displayData();
  }

  displayData(){
    this.usersSer.getAllUsers().subscribe(res => {
      this.data = res;
      console.log(this.data)
    })
  }

  getDetails(username){
    this.router.navigate(['/userdetails/', username])
    // this.usersSer.getUserDetails(id).subscribe(res => {
    //   this.userData = res;
    //   this.router.navigate(['userdetails/'])
    //   console.log(this.userData)
    // })
  }

}
