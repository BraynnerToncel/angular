import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; 
import { CrearUsuarioComponent } from '@features/users/crear-usuario/crear-usuario.component';
import { ConsultarUsuarioComponent } from '@features/users/consultar-usuario/consultar-usuario.component'; 


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CrearUsuarioComponent,
    ConsultarUsuarioComponent
  ],
  template: `
    <mat-sidenav-container class=" sidenav-container">
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          <a mat-list-item (click)="onShowForm()">Crear Usuario</a>
          <a mat-list-item (click)="onShowUsers()">Listar Usuario</a>
        </mat-nav-list>

      </mat-sidenav>
      <mat-sidenav-content>
        <div *ngIf="showForm">
          <app-crear-usuario></app-crear-usuario>
        </div>
        <div *ngIf="!showForm">
          <app-consultar-usuario></app-consultar-usuario>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class SidenavComponent {
  showForm = false;

  onShowForm(): void {
    this.showForm = true;
  }

  onShowUsers(): void {
    this.showForm = false;
  }
}
