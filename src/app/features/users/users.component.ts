import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from '@components/sidenav/sidenav.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SidenavComponent, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
