import { Component } from '@angular/core';
import {  Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from '@features/home/home.component';
import { UsersComponent } from "./features/users/users.component";
import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { SidenavComponent } from '@components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     RouterOutlet, 
     HomeComponent, 
     ToolbarComponent, 
     SidenavComponent,
     UsersComponent,
     CommonModule,
     MatSnackBarModule
    ],
     
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private router: Router) {}
  isUserPage(): boolean {
    return this.router.url === '/users'; 
  }

  title = 'prueba';
  onClickNewUser():void{

  }
}
