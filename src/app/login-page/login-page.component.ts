import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  dateForm: FormGroup;
  user: string;
  password: string;


  submitForm(): void {
    for (const i in this.dateForm.controls) {
      this.dateForm.controls[ i ].markAsDirty();
      this.dateForm.controls[ i ].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,private router: Router) {
    this.user = "123456";
    this.password = "admin";
  }

  ngOnInit(): void {
    this.dateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  toHome() {
    this.router.navigateByUrl("/home");
  }
}
