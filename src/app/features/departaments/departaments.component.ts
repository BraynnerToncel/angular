import { Component } from '@angular/core';
import { SidenavComponent } from '@components/sidenav/sidenav.component';
import { SidenavDepartmentsComponent } from "../../components/sidenav-departments/sidenav-departments.component";

@Component({
  selector: 'app-departaments',
  standalone: true,
  imports: [SidenavComponent, SidenavDepartmentsComponent],
  templateUrl: './departaments.component.html',
  styleUrl: './departaments.component.scss'
})
export class DepartamentsComponent {

}
