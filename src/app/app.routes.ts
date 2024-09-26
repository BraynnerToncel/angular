import { Routes } from '@angular/router';
import { DepartamentsComponent } from '@features/departaments/departaments.component';
import { HomeComponent } from '@features/home/home.component';
import { UsersComponent } from '@features/users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'departments', component: DepartamentsComponent },

];
