import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;
  constructor(private fb: FormBuilder, private authSer: AuthService) { }

  ngOnInit() {
    this.formReg = this.fb.group({
      userName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      bDate: [],
      image: [],
      gender: ['',Validators.required],
    })
  }

  register() {
    localStorage.setItem("user", JSON.stringify(this.formReg.value) )
    // this.authSer.register(this.formReg.value).subscribe(
    //   data => console.log(data),
    //   err => console.log(err)
    // )

  }
}