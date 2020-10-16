import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isSignedIn = false

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {  
    if(localStorage.getItem('user')!= null)
      this.isSignedIn=true
    else
      this.isSignedIn=false
  }

  async onSignIn(email:string, password:string){
    await this.firebaseService.signin(email, password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true
  }

  handleLogout(){
    this.isSignedIn=false
  }
  
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

}
