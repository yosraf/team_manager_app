import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../Services/authentification.service';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  validation: FormGroup;
  errorMessage: string = '';


  constructor(private authService: AuthentificationService,
    private formBuilder: FormBuilder,private router: Router) { 
    
  }

  ngOnInit() {
    this.validation =this.formBuilder.group({
      username:new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5),

      ])),
      role: new FormControl('', Validators.compose([
        Validators.required
      ])),
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
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' }
    ],
    'role':[
        { type: 'required', message: 'role is required' },]
    
  };

  register(value){
    this.authService.registerUser(value)
     .then(res => {
      this.errorMessage = "";
      this.authService.createUser(value).then(
       output=> {
         this.router.navigate(["/homes"],{state:{data:{output}}});

        },
        erro=>{
          console.log(erro);

        }
      );
     
     }, err => {
      this.errorMessage = err.message;

       console.log(err);
      
     })
  }
}
