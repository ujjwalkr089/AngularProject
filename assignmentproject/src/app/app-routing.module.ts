import { HomeScreenComponent } from './custom-Components/home-screen/home-screen.component';
import { LoginScreenComponent } from './custom-Components/login-screen/login-screen.component';
import { SignUpScreenComponent } from './custom-Components/sign-up-screen/sign-up-screen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessScreenComponent } from './custom-Components/success-screen/success-screen.component';

const routes: Routes = [
  {path: '' , component : HomeScreenComponent},
  {path: 'signup' , component : SignUpScreenComponent},
  {path: 'login' , component : LoginScreenComponent},
  {path: 'success' , component : SuccessScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
