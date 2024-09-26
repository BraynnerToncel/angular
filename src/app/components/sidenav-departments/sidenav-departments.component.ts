import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; 
import { CrearDepartamentsComponent } from '@features/departaments/crear-departaments/crear-departaments.component';
import { ListarDepartamentsComponent } from '@features/departaments/listar-departaments/listar-departaments.component';

@Component({
  selector: 'app-sidenav-departments',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    CrearDepartamentsComponent,
    ListarDepartamentsComponent
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          <a mat-list-item (click)="onShowCreate()">Crear Department</a>
          <a mat-list-item (click)="onShowList()">Listar Departments</a>
        </mat-nav-list>

      </mat-sidenav>
      <mat-sidenav-content>
        <div *ngIf="showCreate">
          <app-crear-departaments></app-crear-departaments>
        </div>
        <div *ngIf="!showCreate">
          <app-listar-departaments></app-listar-departaments>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  
})
export class SidenavDepartmentsComponent {
  showCreate = true; // Inicia mostrando el formulario de crear

  onShowCreate(): void {
    this.showCreate = true; // Muestra el formulario para crear un departamento
  }

  onShowList(): void {
    this.showCreate = false; // Muestra la lista de departamentos
  }
}
