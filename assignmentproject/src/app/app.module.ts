import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginScreenComponent } from './custom-Components/login-screen/login-screen.component';
import { SuccessScreenComponent } from './custom-Components/success-screen/success-screen.component';
import { SignUpScreenComponent } from './custom-Components/sign-up-screen/sign-up-screen.component';
import { HomeScreenComponent } from './custom-Components/home-screen/home-screen.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    SuccessScreenComponent,
    SignUpScreenComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
