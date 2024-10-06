import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MesPlantes';
  router: any;
  constructor (public authService: AuthService) {}

  ngOnInit () {
    let isloggedin: string = localStorage.getItem('isloggedIn') ?? '';
        let loggedUser:string= localStorage.getItem('loggedUser') ?? '';
    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
}
