import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSignedIn = false
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
    if(localStorage.getItem('user')!= null)
      this.isSignedIn=true
    else
      this.isSignedIn=false
  }

  async onSignup(email:string, password:string){
    await this.firebaseService.signup(email, password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true
  }

  handleLogout(){
    this.isSignedIn=false
  }

}
