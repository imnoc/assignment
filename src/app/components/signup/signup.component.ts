import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interface/user';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private userservice: UserService) { }

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  router = new Router()

  onSubmit = () => {
    this.userservice.Signup(this.userForm.value as IUser).subscribe(
      data=>{
        alert('Signup Success')
        this.router.navigate(['signin'])

      },error=>{
        console.log(error);
        
      }
    )
  }

}
