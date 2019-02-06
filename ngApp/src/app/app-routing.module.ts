import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {EventsComponent} from './events/events.component'
import {SpecialEventsComponent} from './special-events/special-events.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
=======
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{
  path:'',
  redirectTo:'/events',
  pathMatch:'full'
},
{
  path:'events',
  component: EventsComponent
},
{
  path:'special',
  component: SpecialEventsComponent,
  canActivate: [AuthGuard]

},

{
  path:'login',
  component: LoginComponent
},
{
  path:'register',
  component: RegisterComponent
}

>>>>>>> refs/remotes/origin/master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
