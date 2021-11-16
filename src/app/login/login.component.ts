import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message?= '';
  name!: string;
  password!: string

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
    this.message = this.authService.isLoggedIn?
    'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
   }
  constructor(public authService: AuthService, private route:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.name,this.password).subscribe(() => {
      this.setMessage()
      if(this.authService.isLoggedIn){
        this.route.navigate([this.authService.redirectUrl])

      }
    })

  }
  logout() {

  }

}
