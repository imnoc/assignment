import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private userservice: UserService, private router: Router) { }
  
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit = () => {
    this.userservice.Signin(this.userForm.value as IUser).subscribe(
      data => {
        if (data.error) {
          alert(data.error);
        } else {
          alert('Signin Success');
          this.router.navigate(['']);
        }
      },
      error => {
        alert('Signin Failed');
      }
    );
  }
}
