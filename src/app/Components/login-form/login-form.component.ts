import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../Services/authentification.service';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  validation: FormGroup;
  errorMessage: string = '';
  constructor(private authService: AuthentificationService,
    private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.validation =this.formBuilder.group({
     
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')

      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    }); 

  }
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' }
    ]
  };
  login(value){
    this.router.navigate(["/homes"]);

    /*this.authService.loginUser(value)
    .then(res => {
     this.errorMessage = "";
     this.authService.getUser(res.user.uid).then(re=>{
      this.router.navigate(["/homes"],{state:{data:{re}}});

     })    
    }, err => {
     this.errorMessage = err.message;

      console.log(err);
     
    })*/
  }

}
