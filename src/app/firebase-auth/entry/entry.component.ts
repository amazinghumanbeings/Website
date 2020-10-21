import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements AfterViewInit {

  isSignedIn: boolean = false;

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }

  @ViewChild('signInBtn', {static:false}) signInBtn: any;
  @ViewChild('signUpBtn', {static:false}) signUpBtn: any;
  @ViewChild('contain', {static:false}) contain: any;

  ngAfterViewInit() {
    let signIn = this.signInBtn.nativeElement;
    let signUp = this.signUpBtn.nativeElement;
    let container = this.contain.nativeElement
    // let sign_in_btn = document.querySelector("#sign-in-btn");
    // let sign_up_btn = document.querySelector("#sign-up-btn");
    // let contain = document.querySelector("#contain");

    signUp.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    signIn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
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
