import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'app';

    ngOnInit(){
      firebase.initializeApp({
        apiKey: 'AIzaSyC7GKc2F6dZNBkj0diHHYKLLlSSDyZfqCA',
        authDomain: 'fir-demo-34578.firebaseapp.com',
      });
    }
  }
