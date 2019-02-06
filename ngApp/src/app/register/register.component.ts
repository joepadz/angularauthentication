import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'
import {User} from '../models/user'
>>>>>>> refs/remotes/origin/master
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }
=======
  registerUserData : User
  constructor(private _auth:AuthService,
             private _router:Router) { }
>>>>>>> refs/remotes/origin/master

  ngOnInit() {
  }

<<<<<<< HEAD
=======

  registerUser() {
    this._auth.registerUser(this.registerUserData)
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
