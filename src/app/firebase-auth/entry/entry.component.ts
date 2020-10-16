import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  isSignedIn: boolean = false;

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {

    var sign_in_btn = document.querySelector("#sign-in-btn");
    var sign_up_btn = document.querySelector("#sign-up-btn");
    var contain = document.querySelector("#contain");

    sign_up_btn.addEventListener("click", () => {
      contain.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      contain.classList.remove("sign-up-mode");
    });


    // SignIn Check

    if (localStorage.getItem('user') != null)
      this.isSignedIn = true
    else
      this.isSignedIn = false

    // SignUp Check

    if (localStorage.getItem('user') != null)
      this.isSignedIn = true
    else
      this.isSignedIn = false

  }

  // SignIn Service

  async onSignIn(email: string, password: string) {
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true
  }

  // SignUp Service

  async onSignup(email:string, password:string){
    await this.firebaseService.signup(email, password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true
  }

  // Handling Logout Functionality

  handleLogout(){
    this.isSignedIn=false
  }
  
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit();
    window.location.reload();
  }

}
