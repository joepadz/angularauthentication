import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import {User} from '../models/user'
>>>>>>> refs/remotes/origin/master

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  loginUserData : User;
  constructor(private _auth:AuthService, 
              private _router:Router) { }
>>>>>>> refs/remotes/origin/master

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    ) 
  }

  

>>>>>>> refs/remotes/origin/master
}
