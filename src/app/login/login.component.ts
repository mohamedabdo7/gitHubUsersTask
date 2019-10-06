import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 formLogin: FormGroup;

  constructor(private fb: FormBuilder, private authSer: AuthService, private router: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  login() {
    let user = JSON.parse(localStorage.getItem('user'));
    // console.log(user)
    if ((this.formLogin.value.email == user.email) && (this.formLogin.value.password == user.password)) {
      this.router.navigate(['myusers'])
    } else {
      alert('you are not registered');
    }
    // this.authSer.login(this.formLogin.value).subscribe(
    //   data => {
    //     console.log(data);
    //     localStorage.setItem('user', JSON.stringify(data.user)); 
    //     this.router.navigate(['myusers'])
    //   },
    //   err => console.log(err)
    // )

  }
}
