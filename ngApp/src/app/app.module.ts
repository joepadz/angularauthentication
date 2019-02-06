import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { EventService } from './event.service';
>>>>>>> refs/remotes/origin/master

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    EventsComponent,
    LoginComponent,
    RegisterComponent,
=======
    LoginComponent,
    RegisterComponent,
    EventsComponent,
>>>>>>> refs/remotes/origin/master
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard,EventService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
