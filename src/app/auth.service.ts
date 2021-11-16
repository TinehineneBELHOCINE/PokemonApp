import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl!: string;
  // une méthode de connexion
login(name: string, password: string): Observable<boolean>{
// faites votre appel à un service d'authentification
const isLoggedIn= (name=== 'pikachu' && password === 'pikachu');
return of(true).pipe(
  delay(1000),
  tap(val=> this.isLoggedIn = isLoggedIn)
);
}
// une méthode de déconnexion
logout(): void{
  this.isLoggedIn=false;
}

 
  constructor() { }
}
