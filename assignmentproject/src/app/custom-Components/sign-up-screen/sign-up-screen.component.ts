import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth-service';

@Component({
  selector: 'app-sign-up-screen',
  templateUrl: './sign-up-screen.component.html',
  styleUrls: ['./sign-up-screen.component.css']
})
export class SignUpScreenComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm){
    // const firstName = form.value.firstname;
    // const lastName = form.value.lastname;
    const email = form.value.email;
    const Password = form.value.password;

    this.authService.signUp(email, Password);
  }

}
